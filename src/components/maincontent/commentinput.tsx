import React from "react";
import { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";

// moved to different function to prevent rerender (the entire post) every keystroke
const CommentInput = React.forwardRef<HTMLTextAreaElement>((_props, ref) => {
	const settings = useContext(Settings);
	const theme = themes[settings.theme];

	const [textareaValue, setTextareaValue] = useState<string>("");
	return (
		<TextareaAutosize
			ref={ref}
			onKeyPress={(event) => {
				if (event.key === "Enter") {
					setTextareaValue("");
					event.preventDefault();
				}
			}}
			minRows={1}
			maxRows={3}
			value={textareaValue}
			onChange={(ev) => setTextareaValue(ev.target.value)}
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
		/>
	);
});
CommentInput.displayName = "CommentInput";

export { CommentInput };
