import React, { useEffect, useState } from "react";
import Head from "next/head";
import { SettingsPage } from "../components/settingspage/settingspage";
import { PopupManager } from "../modules/popupmanager";
import { ISettings, Settings } from "../modules/settings";
import themes from "../modules/themes";
import { PostContainer } from "../components/maincontent/postcontainer";
import mainsidebarstyles from "../styles/mainsidebar.module.css";

import { NoScript } from "../components/noscript";
import { SidebarLeft } from "../components/maincontent/sidebarleft";

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
					backdropFilter: shouldShowOverlay ? "blur(5px)" : "blur(0px)",
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
			<NoScript />
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
					<SidebarLeft state={state} />
					<PostContainer />
					<div key="sidebarRight" className={mainsidebarstyles.sidebar_minimal} style={{ minWidth: 200 }}>
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
		postTextSize: 30,
		update() {
			update({});
		},
	});

	useEffect(() => {
		console.log(
			`
	%cPhotopcopy
	%cStop trying to inspect element and look through source like you're some pro hacker or something.
		
	This project is open source. https://github.com/photopcopy/photopcopy. Feel free to contribute! Thx <3 uwu
		`.trim(),
			"font-style: italic; font-size: 20px",
			"font-size: unset",
		);
	}, []);

	return (
		<Settings.Provider value={settings}>
			<App />
		</Settings.Provider>
	);
}

export default AppWrapper;
