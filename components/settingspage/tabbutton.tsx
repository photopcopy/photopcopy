import React from "react";
import { PageTypes } from "./settingspage";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../lib/store";

function TabButton(
	props: React.PropsWithChildren<{
		onClick: React.MouseEventHandler<HTMLButtonElement>;
		self: PageTypes;
		current: PageTypes;
	}>,
) {
	const settings = useSelector(settingsSelector);

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
