// i dont know what to name this

import { PostData } from "../types/post";
import { API_URLS } from "./constants";

export async function loadMorePosts(last: string | undefined, amount: number): Promise<PostData[]> {
	const u = new URL(API_URLS.GetPosts, location.origin);
	if (last) u.searchParams.append("last", last);

	// i dont even know what im doing anymore
	const result = await fetch(u.href).then((r) => r.json());
	for (const post of result.posts) {
		post.author = result.users[post.author];
		for (const comment of post.comments) {
			comment.author = result.users[comment.author];
		}
	}
	return result.posts;
}
