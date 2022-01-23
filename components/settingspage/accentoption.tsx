import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsSelector, updateSettings } from "../../lib/store";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function AccentOption(props: { color: string }) {
	const dispatch = useDispatch();
	const settings = useSelector(settingsSelector);
	return (
		<button
			data-selected={settings.accentColor === props.color}
			className={SettingsPageStyles.accent_option}
			style={{ backgroundColor: props.color }}
			onClick={() => {
				dispatch(updateSettings({ accentColor: props.color }));
			}}
		></button>
	);
}

export { AccentOption };
