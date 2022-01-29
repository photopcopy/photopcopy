import React, { useEffect } from "react";
import Head from "next/head";
import MainContentStyles from "../styles/maincontent.module.scss";

import { PostContainer } from "../components/maincontent/postcontainer";

import { NoScript } from "../components/noscript";
import { MainSidebar } from "../components/maincontent/mainsidebar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { onCommentAdded, AppStore, closePopup, RootState, settingsSelector, showSidebar } from "../lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import IndexPageStyles from "../styles/index.module.scss";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { API_URLS } from "../lib/constants";
import { Comment, PostId, UserId } from "../types/post";
import { SignalR } from "../components/signalr";

function PopupContainer() {
	const popups = useSelector((state: RootState) => state.popups);
	const dispatch = useDispatch();

	let shouldShowOverlay = false;

	const popupsElements = Object.keys(popups).map((key) => {
		if (popups[key].isOpen) {
			shouldShowOverlay = true;
		}
		return (
			<React.Fragment key={key}>
				{popups[key].renderer(
					() => {
						dispatch(closePopup(key));
					},
					popups[key].isOpen,
					popups[key].state,
				)}
			</React.Fragment>
		);
	});

	return (
		<>
			<div className={MainContentStyles.backdrop} data-shown={shouldShowOverlay} />
			{popupsElements}
		</>
	);
}

function Topbar() {
	const settings = useSelector(settingsSelector);
	const dispatch = useDispatch();

	return (
		<header
			className={`${MainContentStyles.topbar}`}
			style={{ fontSize: 30, color: settings.accentColor, alignItems: "center" }}
		>
			<button
				className={`${MainContentStyles.sidebar_btn}`}
				onClick={() => {
					dispatch(showSidebar());
				}}
			>
				<FontAwesomeIcon
					style={{
						width: 25,
						height: 25,
						transition: "transform .5s",
					}}
					icon={faBars}
					color={settings.accentColor}
				/>
			</button>
			Photopcopy
		</header>
	);
	return <></>;
}

// i know you can do this without creating a component but i cant be bothered
function StoreUpdates() {
	const settings = useSelector(settingsSelector);

	const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

	useEffect(() => {
		const body = document.querySelector("body"); //document.body breaks next.js during ssr. really shitty
		if (body) {
			body.className = IndexPageStyles.body;
			body.setAttribute("data-theme", settings.theme);
			body.setAttribute("data-sidebar-open", sidebarOpen.toString());
		}
	}, [settings.theme, sidebarOpen]);
	return <></>;
}

function App() {
	return (
		<Provider store={AppStore}>
			<SignalR />
			<StoreUpdates />
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
					width: "100vw",
				}}
			>
				<MainSidebar />
				<PostContainer />
			</div>
			<PopupContainer />
		</Provider>
	);
}

export default App;
