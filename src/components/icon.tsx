import React from "react";
import { ReactElement } from "react";
import { Settings } from "../modules/settings";
import themes from "../modules/themes";

function Icon(props: { type: "close"; onClick: () => void }) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	let inner: string | ReactElement;
	switch (props.type) {
		case "close":
			inner = "x";
			break;
	}

	return (
		<button
			onClick={props.onClick}
			className={`${theme.backgroundPrimary} ${theme.textPrimary}`}
			style={{
				width: 40,
				height: 40,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				fontSize: 30,
				border: "none",
				borderRadius: 8,
			}}
		>
			{inner}
		</button>
	);
}

export { Icon };
