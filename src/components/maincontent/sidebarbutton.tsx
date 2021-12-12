import React from "react";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import tabstyle from "../../styles/tab.module.css";

function SidebarButton(props: React.PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];
	return (
		<button
			className={`${tabstyle.selectabletab} ${theme.backgroundSecondary} ${theme.textPrimary}`}
			onClick={props.onClick}
			style={{
				cursor: "pointer",
				padding: 0,
				border: "none",
				marginBottom: 4,
				width: "100%",
				height: 35,
				fontSize: 23,
				textAlign: "left",
				display: "flex",
				alignItems: "center",
			}}
		>
			{props.children}
		</button>
	);
}

export { SidebarButton };
