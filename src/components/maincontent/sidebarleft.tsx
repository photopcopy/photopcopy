import { faHome, faSync, faPlus, faCog, faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { languages } from "../../modules/localizationmanager";
import { PopupManager } from "../../modules/popupmanager";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import { SidebarButton } from "./sidebarbutton";
import mainsidebarstyles from "../../styles/mainsidebar.module.css";
import { AppState } from "../../pages";

export function SidebarLeft({ state }: { state: AppState }) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];
	const strings = languages[settings.language].mainpage;

	return (
		<div key="sidebarLeft" className={`${mainsidebarstyles.sidebar}`} style={{ padding: "0px 4px" }}>
			<div className={`${mainsidebarstyles.sidebar}`} style={{ position: "fixed" }}>
				<div
					className={`${theme.backgroundTertiary} ${mainsidebarstyles.sidebar_minimal}`}
					style={{
						borderWidth: 6,
						textAlign: "center",
						borderStyle: "solid",
						borderColor: "rgb(0, 0, 0, 0)",
						borderRadius: 4,
						color: settings.accentColor,
					}}
				>
					<div style={{ fontWeight: 1000, userSelect: "none" }}>
						<span style={{ fontSize: 40 }}>Photop</span>copy
					</div>
				</div>
				<div
					className={theme.backgroundTertiary}
					style={{
						marginTop: 4,
						borderRadius: 4,
						padding: "4px 4px 2px 4px",
					}}
				>
					<SidebarButton onClick={() => {}}>
						<FontAwesomeIcon color={settings.accentColor} style={{ width: 25, padding: 5 }} icon={faHome} />
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.home}</span>
					</SidebarButton>
					<SidebarButton
						onClick={() => {
							state.resetFunc?.();
						}}
					>
						<FontAwesomeIcon color={settings.accentColor} style={{ width: 25, padding: 5 }} icon={faSync} />
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.refresh}</span>
					</SidebarButton>
				</div>
				<div
					className={theme.backgroundTertiary}
					style={{ marginTop: 4, borderRadius: 4, padding: "4px 4px 2px 4px" }}
				>
					<SidebarButton
						onClick={() => {
							state.popupMethods?.SetPopupState("CreatePostMenu", true);
						}}
					>
						<FontAwesomeIcon color={settings.accentColor} style={{ width: 25, padding: 5 }} icon={faPlus} />
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.post}</span>
					</SidebarButton>
					<SidebarButton
						onClick={() => {
							state.popupMethods?.SetPopupState("SettingsMenu", true);
						}}
					>
						<FontAwesomeIcon color={settings.accentColor} style={{ width: 25, padding: 5 }} icon={faCog} />
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.settings}</span>
					</SidebarButton>
					<SidebarButton onClick={() => {}}>
						<FontAwesomeIcon color={settings.accentColor} style={{ width: 25, padding: 5 }} icon={faBell} />
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.notifications}</span>
					</SidebarButton>
					<SidebarButton onClick={() => {}}>
						<FontAwesomeIcon
							color={settings.accentColor}
							style={{ width: 25, padding: 5 }}
							icon={faSignOutAlt}
						/>
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.logout}</span>
					</SidebarButton>
				</div>
			</div>
		</div>
	);
}
