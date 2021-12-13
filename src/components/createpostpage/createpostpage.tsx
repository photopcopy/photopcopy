import React, { useContext, useState } from "react";
import ReactModal from "react-modal";

import themes from "../../modules/themes";
import { languages } from "../../modules/localizationmanager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Settings } from "../../modules/settings";

function CreatePostPage(props: { onRequestClose: () => void; isOpen: boolean }) {
	const settings = useContext(Settings);
	const theme = themes[settings.theme];
	const strings = languages[settings.language].createpostpage;
	return (
		<ReactModal
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			className={`${theme.backgroundSecondary} ${theme.textPrimary}`}
			style={{
				content: {
					position: "absolute",
					inset: "50% 0% 0% 50%",
					transform: "translate(-50%, -50%)",
					height: "50%",
					width: "50%",
					maxWidth: "600px",
					maxHeight: "400px",
					minWidth: "350px",
					minHeight: "200px",
					borderRadius: 8,
					overflow: "hidden",
					display: "flex",
					flexDirection: "column",
					border: "none",
					padding: 0,
				},
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			<div
				key="topbar"
				className={theme.backgroundTertiary}
				style={{
					userSelect: "none",
					width: "100%",
					height: 60,
					display: "flex",
					alignItems: "center",
					boxSizing: "border-box",
					padding: 10,
					//borderBottom: `solid ${Settings.currentState.backgroundColorQuaternary}`,
				}}
			>
				<div style={{ width: "100%", height: "100%", fontSize: 40 }}>{strings.title}</div>
				<div key="topbarRight" style={{ float: "right" }}>
					<FontAwesomeIcon
						cursor="pointer"
						style={{ width: 30, height: 30 }}
						onClick={() => {
							props.onRequestClose();
						}}
						icon={faTimes}
					/>
				</div>
			</div>
			<div key="body" style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}></div>
		</ReactModal>
	);
}

export { CreatePostPage };
