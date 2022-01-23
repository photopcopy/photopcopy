import {
	faHome,
	faSync,
	faPlus,
	faCog,
	faBell,
	faSignOutAlt,
	faSearch,
	faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { languages } from "../../lib/localizationmanager";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
import { SidebarButton } from "./sidebarbutton";
import MainSidebarStyles from "../../styles/mainsidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar, openPopup, RootState, setPosts, settingsSelector, signOut } from "../../lib/store";
import { loadMorePosts } from "../../lib/api";

export function MainSidebar() {
	const settings = useSelector(settingsSelector);

	const theme = themes[settings.theme];
	const strings = languages[settings.language].mainpage;

	const [signedIn, sidebarOpen] = useSelector((state: RootState) => [state.user.signedIn, state.ui.sidebarOpen]);
	const dispatch = useDispatch();

	return (
		<div key="sidebarLeft" className={`${MainSidebarStyles.sidebar}`} style={{ marginRight: 4 }}>
			{/* 
				We want to make the sidebar be "sticky"
				But it does not work. So we use "fixed" instead.	
				This is what twitter uses. It's not a perfect solution and it's finnicky, but it does the trick.
			*/}
			<div className={`${MainSidebarStyles.sidebar_inner} ${sidebarOpen ? MainSidebarStyles.open : ""}`}>
				<div
					className={`${MainSidebarStyles.sidebar_tab_group} ${MainSidebarStyles.sidebar_maximized}`}
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
					className={`${MainSidebarStyles.sidebar_tab_group}`}
					style={{
						marginTop: 4,
						borderRadius: 4,
						padding: "4px 4px 2px 4px",
					}}
				>
					<SidebarButton onClick={() => {}}>
						<FontAwesomeIcon color={settings.accentColor} icon={faHome} />
						<span>{strings.sidebar.home}</span>
					</SidebarButton>
					<SidebarButton onClick={() => {}}>
						<FontAwesomeIcon color={settings.accentColor} icon={faSearch} />
						<span>{strings.sidebar.search}</span>
					</SidebarButton>
					<SidebarButton
						onClick={() => {
							loadMorePosts(undefined, 10).then((newChildren) => {
								dispatch(setPosts(newChildren));
							});
						}}
					>
						<FontAwesomeIcon color={settings.accentColor} icon={faSync} />
						<span>{strings.sidebar.refresh}</span>
					</SidebarButton>
				</div>

				<div
					className={`${theme.backgroundTertiary} ${MainSidebarStyles.sidebar_tab_group}`}
					style={{ marginTop: 4, borderRadius: 4, padding: "4px 4px 2px 4px" }}
				>
					{signedIn ? (
						<>
							<SidebarButton
								onClick={() => {
									dispatch(openPopup({ name: "CreatePostMenu" }));
								}}
							>
								<FontAwesomeIcon color={settings.accentColor} icon={faPlus} />
								<span>{strings.sidebar.post}</span>
							</SidebarButton>
							<SidebarButton
								onClick={() => {
									dispatch(openPopup({ name: "SettingsMenu" }));
								}}
							>
								<FontAwesomeIcon color={settings.accentColor} icon={faCog} />
								<span>{strings.sidebar.settings}</span>
							</SidebarButton>
							<SidebarButton onClick={() => {}}>
								<FontAwesomeIcon color={settings.accentColor} icon={faBell} />
								<span>{strings.sidebar.notifications}</span>
							</SidebarButton>
							<SidebarButton
								onClick={() => {
									//POV: you forgot to use redux and now your project is a mess
									//POV: you converted ur project to redux and you're confused but at least your project isn't a mess
									dispatch(signOut());
								}}
							>
								<FontAwesomeIcon color={settings.accentColor} icon={faSignOutAlt} />
								<span>{strings.sidebar.logout}</span>
							</SidebarButton>
						</>
					) : (
						<>
							<div style={{ width: "100%", flexDirection: "column" }}>
								<label
									className={`${MainSidebarStyles.signin_title}`}
									style={{
										padding: 4,
										fontSize: 14,
										userSelect: "none",
										display: "block",
										borderRadius: 4,
									}}
								>
									You need a Photopcopy account in order to do cool stuff like posting or
									personalizing!
								</label>
								<div style={{ display: "flex", marginTop: 3, marginBottom: 3 }}>
									<button
										style={{ backgroundColor: settings.accentColor }}
										className={`${MainSidebarStyles.signin_btn}`}
										onClick={() => {
											dispatch(hideSidebar());
											dispatch(openPopup({ name: "SignInMenu", state: { page: "signin" } }));
										}}
									>
										Sign In
									</button>
									<button
										className={`${MainSidebarStyles.signin_btn}`}
										onClick={() => {
											dispatch(hideSidebar());
											dispatch(openPopup({ name: "SignInMenu", state: { page: "register" } }));
										}}
									>
										Register
									</button>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
