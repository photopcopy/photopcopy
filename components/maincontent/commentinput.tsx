import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { RootState } from "../../lib/store";
import CommentStyles from "../../styles/comment.module.scss";

// moved to different function to prevent rerender (the entire post) every keystroke
const CommentInput = React.forwardRef<HTMLTextAreaElement, { submitMessage: (msg: string) => void }>(
	({ submitMessage }, ref) => {
		const signedIn = useSelector((s: RootState) => s.user.signedIn);

		const [textareaValue, setTextareaValue] = useState<string>("");
		return (
			<TextareaAutosize
				ref={ref}
				onKeyPress={(event) => {
					if (event.key === "Enter" && textareaValue !== "") {
						submitMessage(textareaValue);
						setTextareaValue("");
						event.preventDefault();
					}
				}}
				minRows={1}
				maxRows={3}
				value={textareaValue}
				className={CommentStyles.input}
				onChange={(ev) => setTextareaValue(ev.target.value)}
				disabled={!signedIn}
				placeholder={signedIn ? "Type stuff here" : "You must be signed in to chat."}
				style={{ cursor: signedIn ? undefined : "not-allowed" }}
			/>
		);
	},
);
CommentInput.displayName = "CommentInput";

export { CommentInput };
