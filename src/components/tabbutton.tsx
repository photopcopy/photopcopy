import React, { useState } from "react"
import { Settings } from "../scripts/settings";
import { PageTypes } from "./settingspage";

function TabButton(props: React.PropsWithChildren<{onClick: React.MouseEventHandler<HTMLButtonElement>, self: PageTypes, current: PageTypes}>) {
	const [isOver, updateIsOver] = useState(false);
	return <button
		onClick={props.onClick}
		onMouseEnter={() => { updateIsOver(true) }}
		onMouseLeave={() => { updateIsOver(false) }}
		style={{cursor:props.self===props.current?"unset":"pointer", zIndex: isOver&&props.self!=props.current?1:0, position:"relative", boxShadow: isOver&&props.self!=props.current ? "0 8px 16px rgba(0,0,0,0.44)" : "", width: props.self===props.current?"calc(100% + 5px)":"100%", height: 30, fontSize:20, borderRadius: 4, backgroundColor:Settings.currentState.backgroundColorSecondary, border:"none", color: Settings.currentState.textColor, textAlign: "left", transition: "box-shadow .2s", marginBottom: 3}}>
		{props.children}
	</button>

}


export { TabButton }