import React from "react";

function PopupContainer(props: React.PropsWithChildren<{}>){
	return <div key="popupOverlay" style={{position: "fixed", width: "100%", height: "100%"}}>
		<div key="popupContainer" style={{position:"absolute", transform:"translate(-50%, -50%)"}}>
			{props.children}
		</div>
	</div> 
}

export {PopupContainer as Popup}