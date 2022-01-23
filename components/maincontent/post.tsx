import React, { ReactElement, useRef, useState } from "react";
import CommentStyles from "../../styles/comment.module.scss";
import PostStyles from "../../styles/post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHashtag, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Comment, User } from "../../types/post";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CommentInput } from "./commentinput";
import { API_URLS } from "../../lib/constants";
import { useSelector } from "react-redux";
import { RootState, settingsSelector } from "../../lib/store";
import { languages } from "../../lib/localizationmanager";

function Post(props: {
	id: string;
	isLiked: boolean;
	comments: Comment[];
	content: string;
	author: User;
	attachments: string[];
	likes: number;
}) {
	const settings = useSelector(settingsSelector);

	const token = useSelector((s: RootState) => s.user.token);

	const [liked, setLiked] = useState<boolean>(props.isLiked);
	const copyIDIcon = useRef<SVGElement>(null);
	const sendMessageIcon = useRef<SVGElement>(null);

	const poststrings = languages[settings.language].mainpage.post;

	return (
		<div
			className={`${PostStyles.post}`}
			style={{
				borderRadius: 8,
				minHeight: 100,
				display: "flex",
			}}
		>
			<div key="postbody" className={PostStyles.body}>
				<div key="postdata" className={PostStyles.data}>
					<div key="userDetails" className={PostStyles.user_details}>
						<img alt="profilepic" src="./assets/DefaultProfilePic.svg" style={{ height: "100%" }} />
						<span style={{ fontSize: 20, marginLeft: 5 }} className={PostStyles.username}>
							{props.author.username}
						</span>
					</div>
					<div style={{ marginRight: 5, display: "flex" }}>
						<button
							data-liked={liked}
							className={`${PostStyles.post_action}`}
							onClick={() => {
								setLiked(!liked);
							}}
							title={liked ? poststrings.unlike : poststrings.like}
						>
							<span>{props.likes + (liked && !props.isLiked ? 1 : 0)}</span>{" "}
							<FontAwesomeIcon icon={faHeart} color={liked ? settings.accentColor : "grey"} />
						</button>
						<button className={`${PostStyles.post_action}`} onClick={() => {}} title={poststrings.comment}>
							<span>{props.comments.length}</span>{" "}
							<FontAwesomeIcon
								icon={faComment}
								color={props.comments.length ? settings.accentColor : "grey"}
							/>
						</button>
						<CopyToClipboard text={props.id}>
							<button
								className={`${PostStyles.post_action}`}
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
				<div className={`${PostStyles.postcontent}`}>{props.content}</div>
			</div>
			<div key="commentContainer" className={`${CommentStyles.comment_section}`}>
				<div
					className={`${CommentStyles.header}`}
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

							if (props.comments.length === 0) {
								elements.push(
									<>
										<div style={{ width: "100%", textAlign: "center" }}>Chat empty</div>
									</>,
								);
								return elements;
							}

							let lastUser: User | undefined;
							for (const comment of props.comments) {
								if (lastUser != comment.author) {
									elements.push(
										<div
											className={CommentStyles.comment}
											style={{ position: "relative", paddingLeft: 30, minHeight: 30 }}
											key={comment.id}
										>
											<div className={`${CommentStyles.username}`}>{comment.author.username}</div>
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
											<div style={{ fontSize: 11 }}>{comment.content}</div>
										</div>,
									);
									lastUser = comment.author;
								} else {
									elements.push(
										<div style={{ paddingLeft: 30, fontSize: 11, paddingBottom: 2 }}>
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
					className={CommentStyles.comment_box}
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
