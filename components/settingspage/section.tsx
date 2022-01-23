import React from "react";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../lib/store";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function Section(props: React.PropsWithChildren<{ title: string }>) {
	const settings = useSelector(settingsSelector);
	return (
		<div className={SettingsPageStyles.section}>
			<h1>{props.title}</h1>
			{props.children}
		</div>
	);
}

export { Section };
