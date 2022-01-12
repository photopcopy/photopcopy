import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ISettings, Settings } from "../lib/settings";
import themes from "../lib/themes";
import { PostContainer } from "../components/maincontent/postcontainer";

import { NoScript } from "../components/noscript";
import { SidebarLeft } from "../components/maincontent/sidebarleft";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppStore, closePopup, RootState } from "../lib/store";

function PopupContainer() {
	const popups = useSelector((state: RootState) => state.popups);
	const dispatch = useDispatch();

	let shouldShowOverlay = false;

	const popupsElements = Object.keys(popups).map((key) => {
		if (popups[key].isOpen) {
			shouldShowOverlay = true;
		}
		return popups[key].renderer(() => {
			dispatch(closePopup(key));
		}, popups[key].isOpen);
	});

	return (
		<>
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					top: 0,
					pointerEvents: shouldShowOverlay ? "unset" : "none",
					backdropFilter: shouldShowOverlay ? "blur(5px)" : "blur(0px)",
					transition: "backdrop-filter .5s",
				}}
			/>
			{popupsElements}
		</>
	);
}

// this needs to use redux, too lazy tho

function App() {
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
				<SidebarLeft />
				<PostContainer />
			</div>
			<PopupContainer />
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

	// TODO(Maybe): Use a more meaning value for token for "not signed in" instead of an empty string.
	return (
		<Provider store={AppStore}>
			<Settings.Provider value={settings}>
				<App />
			</Settings.Provider>
		</Provider>
	);
}

export default AppWrapper;
