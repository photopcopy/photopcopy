import React, { useEffect, useState } from "react";
import Head from "next/head";
//import { Settings } from "../modules/settings";
import { SettingsPage } from "../components/settingspage/settingspage";
import { Post } from "../components/maincontent/post";
import { PopupManager } from "../modules/popupmanager";
import { SidebarButton } from "../components/maincontent/sidebarbutton";
import { ISettings, Settings } from "../modules/settings";
import { languages } from "../modules/localizationmanager";
import themes from "../modules/themes";

function PopupContainer(props: {
	callback: (popupMethods: ReturnType<typeof PopupManager>) => void;
	init: (popupMethods: ReturnType<typeof PopupManager>) => void;
}) {
	const popupMethods = PopupManager();
	const { Render: RenderPopups, shouldShowOverlay } = popupMethods;

	useEffect(() => {
		props.init(popupMethods);
	}, []);

	props.callback(popupMethods);

	return (
		<>
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					pointerEvents: shouldShowOverlay ? "unset" : "none",
					backdropFilter: shouldShowOverlay ? "blur(5px)" : "unset",
					transition: "backdrop-filter .5s",
				}}
			/>
			{RenderPopups()}
		</>
	);
}

function App() {
	const [state] = useState<{ popupMethods?: ReturnType<typeof PopupManager> }>({});
	const settings = React.useContext(Settings);
	const strings = languages[settings.language].mainpage;
	const theme = themes[settings.theme];
	return (
		<>
			<style jsx global>{`
				body {
					font-family: "SF Mono", "Roboto", sans-serif;
				}

				@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
			`}</style>
			<Head>
				<title>Oh baby a triple!</title>
			</Head>
			<noscript>
				<div
					style={{
						position: "fixed",
						width: "100%",
						height: "100%",
						backgroundColor: "grey",
						zIndex: 100,
					}}
				>
					<h1>Enable javascript retard.</h1>
					<a href="https://www.nhentai.net/g/364624">Click me for a surprise</a>
					<span style={{ opacity: 0.02 }}>Just kidding dont click it lmao</span>
				</div>
			</noscript>
			<div
				key="mainContainer"
				className={`${theme.backgroundPrimary}`}
				style={{ position: "fixed", width: "100%", height: "100%" }}
			>
				<div
					key="content"
					style={{
						width: "100%",
						maxWidth: 1200,
						position: "absolute",
						left: "50%",
						transform: "translate(-50%)",
						display: "flex",
						height: "100%",
					}}
				>
					<div key="sidebarLeft" style={{ width: 200, minWidth: 200, padding: "0px 4px" }}>
						<div
							className={theme.backgroundTertiary}
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
								padding: "4px 4px 0px 4px",
							}}
						>
							<SidebarButton onClick={() => {}}>{strings.sidebar.refresh}</SidebarButton>
							<SidebarButton onClick={() => {}}>{strings.sidebar.post}</SidebarButton>
							<SidebarButton
								onClick={() => {
									state.popupMethods?.SetPopupState("SettingsMenu", true);
								}}
							>
								{strings.sidebar.settings}
							</SidebarButton>
							<SidebarButton onClick={() => {}}>{strings.sidebar.logout}</SidebarButton>
						</div>
					</div>
					<div key="postContainer" style={{ width: "100%" }}>
						<Post postId="bruj" />
					</div>
					<div key="sidebarRight" style={{ minWidth: 200, width: 200 }}>
						Roblox Ad Goes here
					</div>
				</div>
			</div>
			<PopupContainer
				callback={(popupMethods) => {
					state.popupMethods = popupMethods;
				}}
				init={(popupMethods) => {
					popupMethods.AddPopup("SettingsMenu", false, (onRequestClose, isOpen) => {
						return <SettingsPage onRequestClose={onRequestClose} isOpen={isOpen} />;
					});
				}}
			/>
		</>
	);
}

interface AppWrapperState {
	settings: ISettings;
	nonce: number;
	update: () => void;
}

function AppWrapper() {
	const [_, update] = React.useState({});
	const [settings] = React.useState<ISettings>({
		theme: "dark",
		language: "english",
		accentColor: "#5ab7fa",
		update() {
			update({});
		},
	});

	return (
		<Settings.Provider value={settings}>
			<App />
		</Settings.Provider>
	);
}

export default AppWrapper;
