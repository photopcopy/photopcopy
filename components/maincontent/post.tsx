import React, { forwardRef, ReactElement, useContext, useEffect, useRef, useState } from "react";
import ChatStyle from "../../styles/chat.module.css";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
import poststyles from "../../styles/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash, faHashtag, faHeart, faIdBadge, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Comment, User } from "../../types/post";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CommentInput } from "./commentinput";
import { API_URLS } from "../../lib/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

function Post(props: {
	id: string;
	isLiked: boolean;
	comments: Comment[];
	content: string;
	author: User;
	attachments: string[];
	likes: number;
}) {
	const settings = useContext(Settings);
	const theme = themes[settings.theme];

	const token = useSelector((s: RootState) => s.user.token);

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

						justifyContent: "space-between",
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
							{props.author.username}
						</span>
					</div>
					<div style={{ marginRight: 5, display: "flex" }}>
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
					display: "flex",
					flexDirection: "column",
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
				{/* Position relative and absolute so the content inside chat doesn't resize the post itself */}
				<div style={{ height: "100%", overflowY: "scroll", position: "relative" }}>
					<div style={{ position: "absolute" }}>
						{(() => {
							const elements: ReactElement[] = [];
							let lastUser: User | undefined;
							for (const comment of props.comments) {
								if (lastUser != comment.author) {
									elements.push(
										<div
											style={{ position: "relative", paddingLeft: 30, minHeight: 30 }}
											key={comment.id}
										>
											<div style={{ fontSize: 14, margin: 0 }} className={`${theme.textPrimary}`}>
												{comment.author.username}
											</div>
											<img
												width={25}
												height={25}
												style={{
													top: 15,
													left: 15,
													transform: "translate(-50%, -50%)",
													position: "absolute",
												}}
												src={comment.author.avatar}
												alt="Profile Picture"
											/>
											<div style={{ fontSize: 11 }} className={`${theme.textSecondary}`}>
												{comment.content}
											</div>
										</div>,
									);
									lastUser = comment.author;
								} else {
									elements.push(
										<div
											style={{ paddingLeft: 30, fontSize: 11, paddingBottom: 2 }}
											className={`${theme.textSecondary}`}
										>
											{comment.content}
										</div>,
									);
								}
							}
							return elements;
						})()}
					</div>
				</div>
				<div
					className={`${theme.backgroundSecondary}`}
					style={{ width: "100%", bottom: 0, display: "flex", alignItems: "center" }}
				>
					<CommentInput
						submitMessage={(msg) => {
							fetch(API_URLS.CreateComment, {
								method: "POST",
								headers: {
									"content-type": "application/json",
									authorization: token,
								},
								body: JSON.stringify({
									content: msg,
									post: props.id,
								}),
							});
						}}
					/>
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
