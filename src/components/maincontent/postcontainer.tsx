// react-infinite-scroll-component is shit but i'm too lazy to implement natively so amazing

import React, { ReactElement, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import { Post } from "./post";

// Can refactor to another file another time
interface PostData {
	text: string;
	media: string[];
	id: string;
	author: string;
}

async function loadMore(amount: number) {
	return new Promise<PostData[]>((res, rej) => {
		setTimeout(() => {
			const a = Array.from({ length: amount }).map(() => {
				return {
					text: "Yea boy",
					media: [],
					id: "",
					author: "",
				};
			});
			res(a);
		});
	});
}

export function PostContainer() {
	//const divRef = useRef<HTMLDivElement>(null);
	const [posts, setPosts] = useState<PostData[]>([]);
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	useEffect(() => {
		loadMore(10).then((newChildren) => {
			setPosts([...posts, ...newChildren]);
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
					loadMore(5).then((newChildren) => setPosts([...posts, ...newChildren]));
				}}
				hasMore={true}
				loader={<h4 className={theme.textPrimary}>loadin mor posts ;)</h4>}
				dataLength={posts.length}
				endMessage={<div>No more :(</div>}
			>
				{posts.map((data) => {
					return <Post key={Math.random().toString()} postId={data.id} media={data.media} text={data.text} />;
				})}
			</InfiniteScroll>
		</div>
	);
}
