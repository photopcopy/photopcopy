import React, { useState } from "react";
import { Settings } from "../../modules/settings";
import { PageTypes } from "./settingspage";
import themes from "../../modules/themes";
import tabstyle from "../../styles/tab.module.css";

function TabButton(
	props: React.PropsWithChildren<{
		onClick: React.MouseEventHandler<HTMLButtonElement>;
		self: PageTypes;
		current: PageTypes;
	}>,
) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	return (
		<button
			onClick={props.onClick}
			className={`${props.self === props.current ? "" : tabstyle.selectabletab} ${theme.backgroundSecondary} ${
				theme.textPrimary
			}`}
			style={{
				cursor: props.self === props.current ? "unset" : "pointer",
				width: "100%",
				height: 30,
				fontSize: 20,
				borderRadius: 4,
				color: props.self === props.current ? settings.accentColor : "",
				border: "none",
				textAlign: "left",
				marginBottom: 3,
				//if color .5s is removed there will be no more smooth color transitions when accent color is changed
				//may work as a feature (sort of)
				transition: "color .5s, box-shadow .5s",
			}}
		>
			{props.children}
		</button>
	);
}

export { TabButton };
