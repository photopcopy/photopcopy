import { useContext, useEffect } from "react";
import PostStyle from "../../styles/post.module.css";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";

function Post(props: { postId: string; text: string; media: string[] }) {
	const settings = useContext(Settings);
	const theme = themes[settings.theme];

	/*
	useEffect(() => {
		console.log("render");
		return () => {
			console.log("dont render");
		};
	});
	*/

	return (
		<div
			className={theme.backgroundQuaternary}
			style={{
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
						padding: 4,

						borderRadius: 4,
						boxSizing: "border-box",
						height: 40,
						display: "flex",
						alignItems: "center",
					}}
				>
					<img alt="profilepic" src="./assets/DefaultProfilePic.svg" style={{ height: "100%" }} />
					<span style={{ fontSize: 25, marginLeft: 5 }} className={theme.textPrimary}>
						Developer
					</span>
				</div>
			</div>
			<div
				key="chatContainer"
				className={`${PostStyle.post} ${theme.backgroundSecondary}`}
				style={{
					width: "70%",
					margin: "6px 6px 6px 0px",
					borderRadius: 8,
					overflow: "hidden",
				}}
			>
				<div
					className={`${theme.backgroundTertiary} ${theme.textSecondary}`}
					style={{
						textAlign: "center",
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
