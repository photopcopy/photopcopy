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
import { CreatePostPage } from "../components/createpostpage/createpostpage";

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

// this needs to use redux, too lazy tho
export interface AppState {
	resetFunc?: () => void;
	popupMethods?: ReturnType<typeof PopupManager>;
}

function App() {
	const [state] = useState<AppState>({});
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	useEffect(() => {
		const body = document.querySelector("body");
		if (body) {
			body.className = "";
			body.classList.add(theme.backgroundPrimary);
			body.classList.add("scroll");
		}
	});

	return (
		<>
			<style jsx global>{`
				body {
					font-family: "SF Mono", "Roboto", sans-serif;
					display: flex;
					justify-content: center;
				}

				@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
			`}</style>
			<Head>
				<title>Oh baby a triple!</title>
			</Head>
			<NoScript />
			<div
				key="content"
				style={{
					maxWidth: 1100,
					display: "flex",
					width: "calc(100vw - 8px)", // bandaid fix to whatever shitty fucking exception html throws at me
				}}
			>
				<SidebarLeft state={state} />
				<PostContainer
					getResetFunc={(func) => {
						state.resetFunc = func;
					}}
				/>
			</div>
			<PopupContainer
				callback={(popupMethods) => {
					state.popupMethods = popupMethods;
				}}
				init={(popupMethods) => {
					popupMethods.AddPopups([
						{
							key: "CreatePostMenu",
							isOpen: false,
							callback: (onRequestClose, isOpen) => {
								return <CreatePostPage onRequestClose={onRequestClose} isOpen={isOpen} />;
							},
						},
						{
							key: "SettingsMenu",
							isOpen: false,
							callback: (onRequestClose, isOpen) => {
								return <SettingsPage onRequestClose={onRequestClose} isOpen={isOpen} />;
							},
						},
					]);
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
