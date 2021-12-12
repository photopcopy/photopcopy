import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import ChatStyle from "../../styles/chat.module.css";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import poststyles from "../../styles/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faHeart, faIdBadge, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { Comment } from "../../types/post";
import TextareaAutosize from "react-textarea-autosize";
import { setClipboard } from "../../modules/clipboard";

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
						height: 40,
						display: "flex",
						alignItems: "center",
					}}
				>
					<img alt="profilepic" src="./assets/DefaultProfilePic.svg" style={{ height: "100%" }} />
					<span style={{ fontSize: 25, marginLeft: 5 }} className={theme.textPrimary}>
						{props.author}
					</span>
					<div style={{ position: "absolute", right: 5, display: "flex" }}>
						<div
							data-liked={liked}
							className={`${poststyles.postactioncontainer} ${theme.backgroundTertiary}`}
							onClick={() => {
								setLiked(!liked);
							}}
						>
							<span className={`${theme.textSecondary}`}>
								{props.likes + (liked && !props.isLiked ? 1 : 0)}
							</span>{" "}
							<FontAwesomeIcon icon={faHeart} color={liked ? settings.accentColor : "grey"} />
						</div>
						<div
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
								setClipboard(props.id);
							}}
						>
							<FontAwesomeIcon forwardedRef={copyIDIcon} icon={faHashtag} color="grey" />
						</div>
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
					style={{ position: "absolute", width: "100%", bottom: 0, display: "flex" }}
				>
					<div
						style={{
							flexGrow: 1,
							minHeight: 20,
							maxHeight: 50,
							padding: 4,
							overflow: "scroll",
							display: "flex",
							alignItems: "center",
						}}
					>
						<TextareaAutosize
							placeholder="Type something here..."
							className={`${theme.textSecondary}`}
							style={{
								fontFamily: "unset",
								width: "100%",
								backgroundColor: "transparent",
								border: "none",
								padding: 0,
								margin: 0,
								resize: "none",
							}}
						></TextareaAutosize>
					</div>
					<div
						style={{
							float: "right",
							height: 20,
							padding: 4,
							width: 20,
							display: "inline-block",
							position: "relative",
						}}
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
					</div>
				</div>
			</div>
		</div>
	);
}

export { Post };
