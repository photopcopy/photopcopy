import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { PopupManager } from "../modules/popupmanager";

function Popup1(props: { onRequestClose: () => void; isOpen: boolean }) {
	return (
		<ReactModal
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			style={{
				content: {
					position: "absolute",
					inset: "50% 0% 0% 50%",
					width: 300,
					height: 200,
					transform: "translate(-50%, -50%)",
				},
				overlay: { position: "fixed", inset: 0, width: "100%", height: "100%" },
			}}
		>
			<button
				onClick={() => {
					props.onRequestClose();
				}}
			>
				Close
			</button>
		</ReactModal>
	);
}

function PopupTest() {
	const { Render: RenderPopups, AddPopup, SetPopupState } = PopupManager();

	useEffect(() => {
		AddPopup("popup1", true, (onRequestClose, isOpen) => {
			return <Popup1 onRequestClose={onRequestClose} isOpen={isOpen} />;
		});
	}, []);

	console.log("render");

	return (
		<>
			<button
				key="clickBtn"
				onClick={() => {
					SetPopupState("popup1", true);
				}}
			>
				Show Settings
			</button>
			<div key="blur" style={{ backdropFilter: "blur(5px)" }}></div>
			{RenderPopups()}
		</>
	);
}

export default PopupTest;
