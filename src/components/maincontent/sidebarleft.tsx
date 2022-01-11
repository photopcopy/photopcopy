import { faHome, faSync, faPlus, faCog, faBell, faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { languages } from "../../modules/localizationmanager";
import { PopupManager } from "../../modules/popupmanager";
import { Settings } from "../../modules/settings";
import themes from "../../modules/themes";
import { SidebarButton } from "./sidebarbutton";
import mainsidebarstyles from "../../styles/mainsidebar.module.css";
import { AppState } from "../../pages";
import { useDispatch, useSelector } from "react-redux";
import { RootState, signOut } from "../../modules/store";

export function SidebarLeft({ state }: { state: AppState }) {
	const settings = React.useContext(Settings);

	const theme = themes[settings.theme];
	const strings = languages[settings.language].mainpage;

	const [signedIn, sidebarOpen] = useSelector((state: RootState) => [state.user.signedIn, state.ui.sidebarOpen]);
	const dispatch = useDispatch();

	return (
		<div key="sidebarLeft" className={`${mainsidebarstyles.sidebar}`} style={{ padding: "0px 4px" }}>
			{/* 
				We want to make the sidebar be "sticky"
				But it does not work. So we use "fixed" instead.	
				This is what twitter uses. It's not a perfect solution and it's finnicky, but it does the trick.
			*/}
			<div
				className={`${mainsidebarstyles.sidebar_inner}`}
				style={{ position: "fixed", left: sidebarOpen ? 5 : undefined, transition: "left .5s" }}
			>
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
					className={`${theme.backgroundTertiary} ${mainsidebarstyles.sidebar_tab_group}`}
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
					<SidebarButton onClick={() => {}}>
						<FontAwesomeIcon
							color={settings.accentColor}
							style={{ width: 25, padding: 5 }}
							icon={faSearch}
						/>
						<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.search}</span>
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
					className={`${theme.backgroundTertiary} ${mainsidebarstyles.sidebar_tab_group}`}
					style={{ marginTop: 4, borderRadius: 4, padding: "4px 4px 2px 4px" }}
				>
					{signedIn ? (
						<>
							<SidebarButton
								onClick={() => {
									state.popupMethods?.SetPopupState("CreatePostMenu", true);
								}}
							>
								<FontAwesomeIcon
									color={settings.accentColor}
									style={{ width: 25, padding: 5 }}
									icon={faPlus}
								/>
								<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.post}</span>
							</SidebarButton>
							<SidebarButton
								onClick={() => {
									state.popupMethods?.SetPopupState("SettingsMenu", true);
								}}
							>
								<FontAwesomeIcon
									color={settings.accentColor}
									style={{ width: 25, padding: 5 }}
									icon={faCog}
								/>
								<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.settings}</span>
							</SidebarButton>
							<SidebarButton onClick={() => {}}>
								<FontAwesomeIcon
									color={settings.accentColor}
									style={{ width: 25, padding: 5 }}
									icon={faBell}
								/>
								<span className={mainsidebarstyles.sidebar_minimal}>
									{strings.sidebar.notifications}
								</span>
							</SidebarButton>
							<SidebarButton
								onClick={() => {
									//POV: you forgot to use redux and now your project is a mess
									dispatch(signOut);
								}}
							>
								<FontAwesomeIcon
									color={settings.accentColor}
									style={{ width: 25, padding: 5 }}
									icon={faSignOutAlt}
								/>
								<span className={mainsidebarstyles.sidebar_minimal}>{strings.sidebar.logout}</span>
							</SidebarButton>
						</>
					) : (
						<div style={{ width: "100%", flexDirection: "column" }}>
							<label
								className={`${theme.textSecondary}  ${theme.backgroundSecondary}`}
								style={{
									padding: 4,
									fontSize: 14,
									userSelect: "none",
									display: "block",
									borderRadius: 4,
								}}
							>
								You need a Photopcopy account in order to do cool stuff like posting or personalizing!
							</label>
							<div style={{ display: "flex", marginTop: 3, marginBottom: 3 }}>
								<button
									className={`${theme.backgroundSecondary} ${theme.textPrimary}`}
									style={{
										cursor: "pointer",
										marginRight: 2,
										borderRadius: 4,
										width: "100%",
										border: "none",
									}}
								>
									Sign In
								</button>
								<button
									className={`${theme.textPrimary}`}
									style={{
										cursor: "pointer",
										marginLeft: 2,
										borderRadius: 4,
										width: "100%",
										border: "none",
										backgroundColor: settings.accentColor,
									}}
								>
									Register
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
