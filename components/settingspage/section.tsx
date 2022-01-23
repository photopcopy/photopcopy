import React from "react";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function Section(props: React.PropsWithChildren<{ title: string }>) {
	return (
		<section className={SettingsPageStyles.section}>
			<h1>{props.title}</h1>
			{props.children}
		</section>
	);
}

export { Section };
