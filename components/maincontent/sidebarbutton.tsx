import React from "react";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../lib/store";
import MainSidebarStyles from "../../styles/mainsidebar.module.scss";

function SidebarButton(props: React.PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
	const settings = useSelector(settingsSelector);
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
