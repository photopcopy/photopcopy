import React from "react";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../lib/store";

function AccentOption(props: { color: string }) {
	const settings = useSelector(settingsSelector);
	return (
		<button
			style={{ backgroundColor: props.color, width: 30, height: 30, flexShrink: 0, margin: 2, cursor: "pointer" }}
			onClick={() => {
				settings.accentColor = props.color;
			}}
		></button>
	);
}

export { AccentOption };
