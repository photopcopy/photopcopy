// react-infinite-scroll-component is shit but i'm too lazy to implement natively so amazing

import React, { ReactElement, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { loadMorePosts } from "../../lib/api";
import { API_URLS } from "../../lib/constants";
import { Settings } from "../../lib/settings";
import { addPosts, RootState, setPosts } from "../../lib/store";
import themes from "../../lib/themes";
import { PostData } from "../../types/post";
import { Post } from "./post";

export function PostContainer() {
	//const divRef = useRef<HTMLDivElement>(null);
	const posts = useSelector((state: RootState) => state.ui.posts);
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	const dispatch = useDispatch();
	useEffect(() => {
		loadMorePosts(undefined, 10).then((newChildren) => {
			//posts is guaranteed to be e
			dispatch(setPosts(newChildren));
		});
	}, []);

	//useEffect(() => void loadMore(10).then((newChildren) => setChildren([...children, ...newChildren])), []);
	return (
		<div key="postContainer" style={{ width: "100%" }}>
			<InfiniteScroll
				next={() => {
					loadMorePosts(posts[posts.length - 1]?.id, 5).then((newChildren) => {
						console.log(newChildren);
						dispatch(addPosts(newChildren));
					});
				}}
				hasMore={true}
				loader={<h4 className={theme.textPrimary}>loadin mor posts ;)</h4>}
				dataLength={posts.length}
				endMessage={<div>No more :(</div>}
			>
				{posts.map((data) => {
					return (
						<Post
							author={data.author}
							isLiked={data.isLiked}
							likes={data.likes}
							comments={data.comments}
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
