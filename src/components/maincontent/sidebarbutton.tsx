import React from "react";
import { Settings } from "../../modules/settings";

function SidebarButton(props: React.PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLButtonElement> }>) {
	return (
		<button
			onClick={props.onClick}
			style={{
				cursor: "pointer",
				padding: 0,
				border: "none",
				backgroundColor: Settings.currentState.backgroundColorSecondary,
				marginBottom: 4,
				color: Settings.currentState.textColor,
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
