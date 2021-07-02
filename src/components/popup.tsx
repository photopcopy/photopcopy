import React from "react";

function PopupContainer(props: React.PropsWithChildren<{}>){
	return <div key="popupOverlay" style={{position: "fixed", width: "100%", height: "100%"}}>
		<div key="popupContainer" style={{position:"absolute", transform:"translate(-50%, -50%)", left: "50%", top: "50%", maxHeight: 400, maxWidth: 560, height: "100%", width: "100%"}}>
			{props.children}
		</div>
	</div> 
}

export {PopupContainer as Popup}