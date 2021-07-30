import React from "react";
import { Settings } from "../../modules/settings";

function AccentOption(props: { color: string }) {
	const settings = React.useContext(Settings);
	return (
		<button
			style={{ backgroundColor: props.color, width: 30, height: 30, margin: 2, cursor: "pointer" }}
			onClick={() => {
				settings.accentColor = props.color;
				settings.update();
			}}
		></button>
	);
}

export { AccentOption };
