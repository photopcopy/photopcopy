import React, { useState } from "react";
import { Settings } from "../../lib/settings";
import { PageTypes } from "./settingspage";
import themes from "../../lib/themes";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function TabButton(
	props: React.PropsWithChildren<{
		onClick: React.MouseEventHandler<HTMLButtonElement>;
		self: PageTypes;
		current: PageTypes;
	}>,
) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	return (
		<button
			onClick={props.onClick}
			data-selected={props.self === props.current}
			disabled={props.self === props.current}
			className={SettingsPageStyles.sidebar_tab}
			style={{
				color: props.self === props.current ? settings.accentColor : "",
			}}
		>
			{props.children}
		</button>
	);
}

export { TabButton };
