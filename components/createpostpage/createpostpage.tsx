import React from "react";
import ReactModal from "react-modal";

import { languages } from "../../lib/localizationmanager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../lib/store";
import CreatePostPageStyles from "../../styles/modals/createpostpage.module.scss";

function CreatePostPage(props: { onRequestClose: () => void; isOpen: boolean; state: {} }) {
	const settings = useSelector(settingsSelector);
	const strings = languages[settings.language].createpostpage;
	return (
		<ReactModal
			key="createpostpage"
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			className={`${CreatePostPageStyles.page}`}
			style={{
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			<header
				style={{
					userSelect: "none",
					width: "100%",
					display: "flex",
					alignItems: "center",
					padding: 10,
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
			</header>
			<div key="body" style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}></div>
		</ReactModal>
	);
}

export { CreatePostPage };
