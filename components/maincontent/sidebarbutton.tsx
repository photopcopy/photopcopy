import React from "react";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
import MainSidebarStyles from "../../styles/mainsidebar.module.scss";

function SidebarButton(props: React.PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];
	return (
		<button
			className={`${MainSidebarStyles.sidebar_btn}`}
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
