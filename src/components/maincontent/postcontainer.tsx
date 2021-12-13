// react-infinite-scroll-component is shit but i'm too lazy to implement natively so amazing

import React, { ReactElement, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import { PostData } from "../../types/post";
import { Post } from "./post";

// Can refactor to another file another time

async function loadMore(last: string | undefined, amount: number): Promise<PostData[]> {
	const u = new URL("/api/getposts", location.origin);
	if (last) u.searchParams.append("last", last);

	return (await fetch(u.href).then((r) => r.json())).posts;
}

export function PostContainer(props: { getResetFunc: (func: () => void) => void }) {
	//const divRef = useRef<HTMLDivElement>(null);
	const [posts, setPosts] = useState<PostData[]>([]);
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	props.getResetFunc(() => {
		setPosts([]);
		loadMore(undefined, 10).then((newChildren) => {
			setPosts(newChildren);
		});
	});

	useEffect(() => {
		loadMore(undefined, 10).then((newChildren) => {
			//posts is guaranteed to be e
			setPosts(newChildren);
		});
	}, []);
	//useEffect(() => void loadMore(10).then((newChildren) => setChildren([...children, ...newChildren])), []);
	return (
		<div
			key="postContainer"
			id="postContainer"
			className="scroll"
			style={{ width: "100%", height: "100%", overflow: "auto" }}
		>
			<InfiniteScroll
				scrollableTarget="postContainer"
				next={() => {
					loadMore(posts[posts.length - 1]?.id, 5).then((newChildren) => {
						console.log(newChildren);
						setPosts([...posts, ...newChildren]);
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
