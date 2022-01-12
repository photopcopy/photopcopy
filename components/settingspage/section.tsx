import React from "react";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
function Section(props: React.PropsWithChildren<{ title: string }>) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];
	return (
		<div
			className={theme.backgroundQuaternary}
			style={{
				width: "100%",
				marginTop: 10,
				padding: 4,
				boxSizing: "border-box",
				borderRadius: 8,
			}}
		>
			<h1 style={{ margin: "0px 0px 4px 0px" }}>{props.title}</h1>
			{props.children}
		</div>
	);
}

export { Section };
