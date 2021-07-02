import React, { useState } from "react"

function TabButton(props: React.PropsWithChildren<{}>) {
	const [isOver, updateIsOver] = useState(false);
	return <button onMouseEnter={() => { updateIsOver(true) }} onMouseLeave={() => { updateIsOver(false) }} style={{ boxShadow: isOver ? "0 8px 16px rgba(0,0,0,0.24)" : "", width: "100%", height: 20, textAlign: "left", transition: "box-shadow: .5s" }}>
		{props.children}
	</button>

}


export { TabButton }