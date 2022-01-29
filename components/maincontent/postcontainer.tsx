// react-infinite-scroll-component is shit but i'm too lazy to implement natively so amazing

import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { loadMorePosts } from "../../lib/api";
import { onPostsAdded, RootState } from "../../lib/store";
import { Post } from "./post";
import MainContentStyles from "../../styles/maincontent.module.scss";

export function PostContainer() {
	//const divRef = useRef<HTMLDivElement>(null);
	const ui = useSelector((state: RootState) => state.ui);
	const posts = ui.groups[ui.currentGroup].posts.map((id) => ui.posts[id]);

	const dispatch = useDispatch();
	useEffect(() => {
		loadMorePosts(undefined, 10).then((newChildren) => {
			dispatch(onPostsAdded({ ...newChildren, reset: true }));
		});
	}, []);

	//html gets a little fucked up when set to 100% instead of calc'ed
	return (
		<div style={{ width: "100%" }}>
			<InfiniteScroll
				next={() => {
					loadMorePosts(posts[posts.length - 1]?.id, 5).then((newChildren) => {
						console.log(newChildren);
						dispatch(onPostsAdded(newChildren));
					});
				}}
				hasMore={true}
				loader={<h4 className={MainContentStyles.posts_loading_text}>loadin mor posts ;)</h4>}
				dataLength={posts.length}
				endMessage={<div>No more :(</div>}
			>
				{posts.map((data) => {
					return (
						<Post
							author={ui.users[data.author]}
							isLiked={data.isLiked}
							likes={data.likes}
							comments={data.comments.map((comment) => ui.comments[comment])}
							key={data.id}
							id={data.id}
							attachments={data.attachments}
							content={data.content}
						/>
					);
				})}
			</InfiniteScroll>
		</div>
	);
}
