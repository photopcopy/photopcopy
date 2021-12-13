import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import ChatStyle from "../../styles/chat.module.css";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import poststyles from "../../styles/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faHeart, faIdBadge, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Comment } from "../../types/post";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CommentInput } from "./commentinput";

function Post(props: {
	id: string;
	isLiked: boolean;
	comments: Comment[];
	content: string;
	author: string;
	attachments: string[];
	likes: number;
}) {
	const settings = useContext(Settings);
	const theme = themes[settings.theme];

	const [liked, setLiked] = useState<boolean>(props.isLiked);
	const copyIDIcon = useRef<SVGElement>(null);
	const sendMessageIcon = useRef<SVGElement>(null);

	return (
		<div
			className={`${theme.backgroundQuaternary} ${poststyles.post}`}
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

						position: "relative",

						borderRadius: 4,
						boxSizing: "border-box",
						height: 30,
						display: "flex",
						alignItems: "center",
					}}
				>
					<div key="userDetails" style={{ height: "100%", cursor: "pointer", userSelect: "none" }}>
						<img alt="profilepic" src="./assets/DefaultProfilePic.svg" style={{ height: "100%" }} />
						<span style={{ fontSize: 20, marginLeft: 5 }} className={theme.textPrimary}>
							{props.author}
						</span>
					</div>
					<div style={{ position: "absolute", right: 5, display: "flex" }}>
						<button
							style={{ border: "none" }}
							data-liked={liked}
							className={`${poststyles.postactioncontainer} ${theme.backgroundTertiary}`}
							onClick={() => {
								setLiked(!liked);
							}}
							title="I like this post."
						>
							<span className={`${theme.textSecondary}`}>
								{props.likes + (liked && !props.isLiked ? 1 : 0)}
							</span>{" "}
							<FontAwesomeIcon icon={faHeart} color={liked ? settings.accentColor : "grey"} />
						</button>
						<CopyToClipboard text={props.id}>
							<button
								style={{ border: "none" }}
								className={`${poststyles.postactioncontainer} ${theme.backgroundTertiary}`}
								title="Copy Post ID"
								onClick={() => {
									copyIDIcon.current?.animate(
										[
											{
												color: settings.accentColor,
											},
											{
												color: "grey",
											},
										],
										{ duration: 500 },
									);
								}}
							>
								<FontAwesomeIcon forwardedRef={copyIDIcon} icon={faHashtag} color="grey" />
							</button>
						</CopyToClipboard>
					</div>
				</div>
				<div className={`${theme.textSecondary} ${poststyles.postcontent}`}>{props.content}</div>
			</div>
			<div
				key="chatContainer"
				className={`${ChatStyle.chat} ${theme.backgroundTertiary}`}
				style={{
					width: "70%",
					margin: "6px 6px 6px 0px",
					borderRadius: 8,
					overflow: "hidden",
					position: "relative",
				}}
			>
				<div
					className={`${theme.backgroundSecondary} ${theme.textSecondary}`}
					style={{
						textAlign: "center",
						padding: "2px 0px",
						userSelect: "none",
					}}
				>
					Chat
				</div>
				<div
					className={`${theme.backgroundSecondary}`}
					style={{ position: "absolute", width: "100%", bottom: 0, display: "flex", alignItems: "center" }}
				>
					<CommentInput />
					<button
						style={{
							float: "right",
							height: 24,
							padding: 4,
							width: 24,
							display: "inline-block",
							position: "relative",
							border: "none",
							background: "transparent",
						}}
						title="Send Message"
					>
						<FontAwesomeIcon
							icon={faPaperPlane}
							style={{
								position: "absolute",
								transform: "translate(-50%, -50%)",
								left: "50%",
								top: "50%",
								cursor: "pointer",
							}}
							color="grey"
							onClick={() => {
								sendMessageIcon.current?.animate(
									[
										{
											color: settings.accentColor,
										},
										{
											color: "grey",
										},
									],
									{ duration: 500 },
								);
							}}
							forwardedRef={sendMessageIcon}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export { Post };
