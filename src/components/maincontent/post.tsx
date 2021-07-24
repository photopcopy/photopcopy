import { useEffect } from "react";
import { Settings } from "../../modules/settings";
import PostStyle from "../../styles/post.module.css";

function Post(props: { postId: string }) {
	useEffect(() => {
		console.log("render");
		return () => {
			console.log("dont render");
		};
	});

	return (
		<div
			key={props.postId}
			style={{
				backgroundColor: Settings.currentState.backgroundColorQuaternary,
				borderRadius: 8,
				minHeight: 100,
				display: "flex",
			}}
		>
			<div key="contentContainer" style={{ minWidth: 300, width: "100%" }}>
				<div
					key="postDataContainer"
					style={{
						margin: "6px",
						width: "calc(100% - 12px)",
						borderRadius: 4,
						padding: 4,
						boxSizing: "border-box",
						height: 40,
						display: "flex",
						alignItems: "center",
						backgroundColor: Settings.currentState.backgroundColorTertiary,
					}}
				>
					<img src="./assets/DefaultProfilePic.svg" style={{ height: "100%" }} />
					<span style={{ fontSize: 25, marginLeft: 5 }}>Developer</span>
				</div>
			</div>
			<div
				key="chatContainer"
				className={PostStyle.post}
				style={{
					width: "70%",
					margin: "6px 6px 6px 0px",
					backgroundColor: Settings.currentState.backgroundColorTertiary,
					borderRadius: 8,
					overflow: "hidden",
				}}
			>
				<div
					style={{
						textAlign: "center",
						background: Settings.currentState.backgroundColorSecondary,
						padding: "2px 0px",
					}}
				>
					Chat
				</div>
			</div>
		</div>
	);
}

export { Post };
