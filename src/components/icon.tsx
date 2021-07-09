import { ReactElement } from "react"
import { Settings } from "../modules/settings";


function Icon(props: {type: "close", onClick: ()=>void}) {
	let inner: string | ReactElement;
	switch (props.type) {
		case "close":
			inner = "x"
			break;
	}

	return <button onClick={props.onClick} style={{width: 40, height: 40, display: "flex", alignItems: "center", justifyContent:"center", cursor: "pointer", fontSize: 30, backgroundColor: Settings.currentState.backgroundColor, border:"none", borderRadius:8, color: Settings.currentState.textColor}}>{inner}</button>
}

export {Icon}