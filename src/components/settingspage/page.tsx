import { Settings } from "../../modules/settings";
import { PageTypes } from "./settingspage";
import themes from "../../modules/themes";
import React from "react";

function Page(props: React.PropsWithChildren<{ self: PageTypes; current: PageTypes }>) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	return (
		<div
			className="scroll"
			style={{
				pointerEvents: props.self === props.current ? "unset" : "none",
				opacity: props.self === props.current ? 1 : 0,
				transition: "opacity .3s",
				width: "100%",
				height: "100%",
				boxSizing: "border-box",
				position: "absolute",
				padding: 8,
				overflow: "auto",
			}}
		>
			<div
				key="content"
				className={theme.backgroundTertiary}
				style={{
					width: "100%",
					borderRadius: 8,
					padding: "0px 8px 8px 8px",
					boxSizing: "border-box",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export { Page };
