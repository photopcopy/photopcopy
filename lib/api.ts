// i dont know what to name this

import { PostData, User } from "../types/post";
import { API_URLS } from "./constants";

export async function loadMorePosts(last: string | undefined, amount: number): Promise<PostData[]> {
	const u = new URL(API_URLS.GetPosts, location.origin);
	if (last) u.searchParams.append("last", last);

	// i dont even know what im doing anymore

	let result: {
		users: Record<string, User>;
		posts: any[];
	};
	if (process.env.NODE_ENV === "development") {
		result = {
			posts: [
				{
					id: "1",
					author: "user1",
					content: "Testing 1 2 3 4 5\nHello World",
					comments: [
						{
							id: "2",
							author: "user1",
							content: "OKAY",
						},
					],
					isLiked: false,
					likes: 9,
				},
			],
			users: {
				user1: {
					id: "2",
					username: "Fluttershy",
					avatar: "./assets/DefaultProfilePic.svg",
				},
			},
		};
	} else {
		result = await fetch(u.href).then((r) => r.json());
	}
	for (const post of result.posts) {
		post.author = result.users[post.author];
		for (const comment of post.comments) {
			comment.author = result.users[comment.author];
		}
	}
	return result.posts;
}
