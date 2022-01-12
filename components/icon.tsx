import React from "react";
import { ReactElement } from "react";
import { Settings } from "../lib/settings";
import themes from "../lib/themes";

import Component from "assets/fa-icons/plus-square-regular.svg";

/*
function Icon(props: { type: keyof typeof icons; size?: number; padding?: number; onClick?: () => void }) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	return (
		<svg
			style={{
				padding: props.padding || "unset",
				border: "none",
				width: props.size || 40,
				height: props.size || 40,
				borderRadius: 8,
			}}
			fill={settings.accentColor}
		>
			<use href={icons[props.type] + ".svg-inline--fa"} />
		</svg>
	);
}

export { Icon };
*/
