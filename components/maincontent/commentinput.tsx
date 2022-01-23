import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { RootState, settingsSelector } from "../../lib/store";
import themes from "../../lib/themes";

// moved to different function to prevent rerender (the entire post) every keystroke
const CommentInput = React.forwardRef<HTMLTextAreaElement, { submitMessage: (msg: string) => void }>(
	({ submitMessage }, ref) => {
		const settings = useSelector(settingsSelector);
		const theme = themes[settings.theme];
		const signedIn = useSelector((s: RootState) => s.user.signedIn);

		const [textareaValue, setTextareaValue] = useState<string>("");
		return (
			<TextareaAutosize
				ref={ref}
				onKeyPress={(event) => {
					if (event.key === "Enter") {
						submitMessage(textareaValue);
						setTextareaValue("");
						event.preventDefault();
					}
				}}
				minRows={1}
				maxRows={3}
				value={textareaValue}
				onChange={(ev) => setTextareaValue(ev.target.value)}
				disabled={!signedIn}
				placeholder={signedIn ? "Type stuff here" : "You must be signed in to chat."}
				className={`${theme.textSecondary}`}
				style={{
					cursor: signedIn ? "not-allowed" : undefined,
					fontFamily: "unset",
					width: "100%",
					backgroundColor: "transparent",
					border: "none",
					padding: 0,
					margin: 0,
					resize: "none",
				}}
			/>
		);
	},
);
CommentInput.displayName = "CommentInput";

export { CommentInput };
