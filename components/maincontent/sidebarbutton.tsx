import React from "react";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
import tabstyle from "../../styles/tab.module.css";

function SidebarButton(props: React.PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];
	return (
		<button
			className={`${tabstyle.selectabletab} ${theme.backgroundSecondary} ${theme.textPrimary} ${tabstyle.button}`}
			onClick={props.onClick}
			style={{
				marginBottom: 4,
				textAlign: "left",
			}}
		>
			{props.children}
		</button>
	);
}

export { SidebarButton };
