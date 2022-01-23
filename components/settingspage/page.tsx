import { PageTypes } from "./settingspage";
import React from "react";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function Page(props: React.PropsWithChildren<{ self: PageTypes; current: PageTypes }>) {
	return (
		<div className={SettingsPageStyles.options_page} data-selected={props.self === props.current}>
			<div key="content">{props.children}</div>
		</div>
	);
}

export { Page };
