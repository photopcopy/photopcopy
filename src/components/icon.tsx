import { ReactElement } from "react"
import { Settings } from "../scripts/settings";


function Icon({type}: {type: "close"}) {
	let inner: string | ReactElement;
	switch (type) {
		case "close":
			inner = "x"
			break;
	}
	return <button style={{width: 40, height: 40, display: "flex", alignItems: "center", justifyContent:"center", cursor: "pointer", fontSize: 30, backgroundColor: Settings.currentState.backgroundColor, border:"none", borderRadius:8, color: Settings.currentState.textColor}}>{inner}</button>
}

export {Icon}