import React from "react";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";

function SidebarButton(props: React.PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];
	return (
		<button
			className={`${theme.backgroundSecondary} ${theme.textPrimary}`}
			onClick={props.onClick}
			style={{
				cursor: "pointer",
				padding: 0,
				border: "none",
				marginBottom: 4,
				width: "100%",
				height: 40,
				fontSize: 30,
				textAlign: "center",
			}}
		>
			{props.children}
		</button>
	);
}

export { SidebarButton };
