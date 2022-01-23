import React, { useEffect } from "react";
import Head from "next/head";
import { ISettings, Settings } from "../lib/settings";
import themes from "../lib/themes";
import MainContentStyles from "../styles/maincontent.module.scss";

import { PostContainer } from "../components/maincontent/postcontainer";

import { NoScript } from "../components/noscript";
import { MainSidebar } from "../components/maincontent/mainsidebar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppStore, closePopup, hideSidebar, RootState, settingsSelector, showSidebar } from "../lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import IndexPageStyles from "../styles/index.module.scss";

function PopupContainer() {
	const popups = useSelector((state: RootState) => state.popups);
	const dispatch = useDispatch();

	let shouldShowOverlay = false;

	const popupsElements = Object.keys(popups).map((key) => {
		if (popups[key].isOpen) {
			shouldShowOverlay = true;
		}
		return popups[key].renderer(
			() => {
				dispatch(closePopup(key));
			},
			popups[key].isOpen,
			popups[key].state,
		);
	});

	return (
		<>
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					zIndex: 1,
					top: 0,
					pointerEvents: shouldShowOverlay ? "unset" : "none",
					backdropFilter: shouldShowOverlay ? "blur(3px)" : "blur(0px)",
					transition: "backdrop-filter .5s",
				}}
			/>
			{popupsElements}
		</>
	);
}

function Topbar() {
	const settings = useSelector(settingsSelector);
	const dispatch = useDispatch();
	const sidebarOpen = useSelector((state: RootState) => {
		return state.ui.sidebarOpen;
	});
	return (
		<div
			className={`${MainContentStyles.topbar}`}
			style={{ fontSize: 30, color: settings.accentColor, alignItems: "center" }}
		>
			<button
				className={`${MainContentStyles.sidebar_btn}`}
				onClick={() => {
					if (sidebarOpen) {
						dispatch(hideSidebar());
					} else {
						dispatch(showSidebar());
					}
				}}
			>
				<FontAwesomeIcon
					style={{
						width: 25,
						height: 25,
						transition: "transform .5s",
					}}
					icon={sidebarOpen ? faTimes : faBars}
					color={settings.accentColor}
				/>
			</button>
			Photopcopy
		</div>
	);
	return <></>;
}

// this needs to use redux, too lazy tho

function App() {
	const settings = useSelector(settingsSelector);

	useEffect(() => {
		const body = document.querySelector("body"); //document.body breaks next.js during ssr. really shitty
		if (body) {
			body.className = IndexPageStyles.body;
			body.setAttribute("data-theme", settings.theme);
		}
	}, [settings.theme]);

	return (
		<>
			<Head>
				<title>Oh baby a triple!</title>
			</Head>
			<NoScript />
			<Topbar />
			<div
				key="content"
				style={{
					maxWidth: 1100,
					display: "flex",
					width: "calc(100vw - 8px)", // bandaid fix to whatever shitty fucking exception html throws at me
				}}
			>
				<MainSidebar />
				<PostContainer />
			</div>
			<PopupContainer />
		</>
	);
}

function AppWrapper() {
	return (
		<Provider store={AppStore}>
			<App />
		</Provider>
	);
}
export default AppWrapper;
