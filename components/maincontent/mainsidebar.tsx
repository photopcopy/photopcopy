import { faHome, faSync, faPlus, faCog, faBell, faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { languages } from "../../lib/localizationmanager";
import { SidebarButton } from "./sidebarbutton";
import MainSidebarStyles from "../../styles/mainsidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar, onPostsAdded, openPopup, RootState, settingsSelector, signOut } from "../../lib/store";
import { loadMorePosts } from "../../lib/api";

export function MainSidebar() {
	const settings = useSelector(settingsSelector);

	const strings = languages[settings.language].mainpage;

	const [signedIn, sidebarOpen] = useSelector((state: RootState) => [state.user.signedIn, state.ui.sidebarOpen]);
	const dispatch = useDispatch();

	// shitty way to detect dragging the mouse left to get rid of sidebar
	const [state] = useState({ mouseIsDown: false });

	return (
		<>
			<div
				className={`${MainSidebarStyles.sidebar_overlay} ${sidebarOpen ? MainSidebarStyles.open : ""}`}
				onMouseMove={(e) => {
					if (state.mouseIsDown && e.movementX < -5) {
						dispatch(hideSidebar());
					}
				}}
				onMouseDown={() => {
					state.mouseIsDown = true;
				}}
				onMouseUp={() => {
					state.mouseIsDown = false;
				}}
				onClick={(e) => {
					dispatch(hideSidebar());
				}}
			/>
			<aside key="sidebarLeft" className={`${MainSidebarStyles.sidebar}`} style={{ marginRight: 4 }}>
				<div className={`${MainSidebarStyles.sidebar_inner} ${sidebarOpen ? MainSidebarStyles.open : ""}`}>
					<div
						className={`${MainSidebarStyles.sidebar_section}`}
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
					<section
						className={MainSidebarStyles.sidebar_section}
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
									dispatch(onPostsAdded(newChildren));
								});
							}}
						>
							<FontAwesomeIcon color={settings.accentColor} icon={faSync} />
							<span>{strings.sidebar.refresh}</span>
						</SidebarButton>
					</section>

					<section
						className={MainSidebarStyles.sidebar_section}
						style={{ marginTop: 4, borderRadius: 4, padding: "4px 4px 2px 4px" }}
					>
						{signedIn ? (
							<>
								<SidebarButton
									onClick={() => {
										dispatch(hideSidebar());
										dispatch(openPopup({ name: "CreatePostMenu" }));
									}}
								>
									<FontAwesomeIcon color={settings.accentColor} icon={faPlus} />
									<span>{strings.sidebar.post}</span>
								</SidebarButton>
								<SidebarButton
									onClick={() => {
										dispatch(hideSidebar());
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
									<p
										className={`${MainSidebarStyles.signin_title}`}
										style={{
											padding: 4,
											fontSize: 14,
											userSelect: "none",
											display: "block",
											borderRadius: 4,
											margin: 0,
										}}
									>
										You need a Photopcopy account in order to do cool stuff like posting or
										personalizing!
									</p>
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
												dispatch(
													openPopup({ name: "SignInMenu", state: { page: "register" } }),
												);
											}}
										>
											Register
										</button>
									</div>
								</div>
							</>
						)}
					</section>
				</div>
			</aside>
		</>
	);
}
