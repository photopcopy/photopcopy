import React, { useState } from "react";
import { Settings } from "../../modules/settings";
import { PageTypes } from "./settingspage";
import themes from "../../modules/themes";

function TabButton(
	props: React.PropsWithChildren<{
		onClick: React.MouseEventHandler<HTMLButtonElement>;
		self: PageTypes;
		current: PageTypes;
	}>,
) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	const [isOver, updateIsOver] = useState(false);
	return (
		<button
			onClick={props.onClick}
			onMouseEnter={() => {
				updateIsOver(true);
			}}
			onMouseLeave={() => {
				updateIsOver(false);
			}}
			className={`${theme.backgroundSecondary} ${theme.textPrimary}`}
			style={{
				cursor: props.self === props.current ? "unset" : "pointer",
				zIndex: isOver && props.self != props.current ? 1 : 0,
				position: "relative",
				boxShadow: isOver && props.self != props.current ? "0 8px 16px rgba(0,0,0,0.44)" : "",
				width: "100%",
				height: 30,
				fontSize: 20,
				borderRadius: 4,
				color: props.self === props.current ? settings.accentColor : "",
				border: "none",
				textAlign: "left",
				transition: "box-shadow .5s, color .3s",
				marginBottom: 3,
			}}
		>
			{props.children}
		</button>
	);
}

export { TabButton };
