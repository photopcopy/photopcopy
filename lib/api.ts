// i dont know what to name this

import { CommentId, Comment, GroupId, Post, User, UserId } from "../types/post";
import { API_URLS } from "./constants";

export interface GetPostsResult {
	posts: Post[];
	users: Record<UserId, User>;
	group?: GroupId;
	comments: Record<CommentId, Comment>;
}

export async function loadMorePosts(
	last: string | undefined,
	amount = 10,
	group: GroupId = "global",
): Promise<GetPostsResult> {
	const u = new URL(API_URLS.GetPosts, location.origin);
	if (last) u.searchParams.append("last", last);

	// i dont even know what im doing anymore

	let result: {
		users: Record<UserId, User>;
		posts: Post[];
		comments: Record<CommentId, Comment>;
	};
	const p: any = [];
	for (let i = 0; i < 100; i++) {
		p.push({
			id: i.toString(),
			author: "user1",
			content: "Testing 1 2 3 4 5\nHello World",
			comments: ["2"],
			isLiked: false,
			likes: 9,
		});
	}

	if (process.env.NODE_ENV === "development") {
		result = {
			posts: [...p],
			comments: {
				"2": {
					id: "2",
					author: "user1",
					content: "OKAY",
				},
			},
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

	return result;
}
