// react-infinite-scroll-component is shit but i'm too lazy to implement natively so amazing

import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { loadMorePosts } from "../../lib/api";
import { Settings } from "../../lib/settings";
import { addPosts, RootState, setPosts, settingsSelector } from "../../lib/store";
import themes from "../../lib/themes";
import { Post } from "./post";
import MainContentStyles from "../../styles/maincontent.module.scss";

export function PostContainer() {
	//const divRef = useRef<HTMLDivElement>(null);
	const posts = useSelector((state: RootState) => state.ui.posts);

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
				loader={<h4 className={MainContentStyles.posts_loading_text}>loadin mor posts ;)</h4>}
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
