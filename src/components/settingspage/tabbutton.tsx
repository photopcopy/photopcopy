import React, { useState } from "react"
import { Settings } from "../../modules/settings";
import { PageTypes } from "./settingspage";

function TabButton(props: React.PropsWithChildren<{onClick: React.MouseEventHandler<HTMLButtonElement>, self: PageTypes, current: PageTypes}>) {
	const [isOver, updateIsOver] = useState(false);
	return <button
			onClick={props.onClick}
			onMouseEnter={() => { updateIsOver(true) }}
			onMouseLeave={() => { updateIsOver(false) }}
			style={{cursor:props.self===props.current?"unset":"pointer",
			zIndex: isOver&&props.self!=props.current?1:0, position:"relative",
			boxShadow: isOver&&props.self!=props.current ? "0 8px 16px rgba(0,0,0,0.44)" : "",
			width: "100%",
			height: 30,
			fontSize:20,
			borderRadius: 4,
			backgroundColor:Settings.currentState.backgroundColorSecondary,
			border:"none",
			color: props.self===props.current?Settings.currentState.accentColor:Settings.currentState.textColor,
			textAlign: "left",
			transition: "box-shadow .5s, color .3s",
			marginBottom: 3,
//			fontWeight: props.self===props.current?800:100,
		}}>
		{props.children}
	</button>

}


export { TabButton }