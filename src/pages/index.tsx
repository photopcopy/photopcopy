import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Settings, ComputedSettings } from '../modules/settings'
import { Icon } from '../components/icon'
import { TabButton } from '../components/settingspage/tabbutton'
import { SettingsPage } from '../components/settingspage/settingspage'
import { Post } from '../components/maincontent/post'
import { PopupManager } from '../modules/popupmanager'

function App() {
	const [nonce, update] = useState(0);
	Settings._update = ()=>{
		update(nonce+1)
	};

	//it counts up for every popup, and counts down everytime one is closed, that way you can have 0 to indicate that all popups are closed
	//im not sure if this could lead to a bug if the number is unexpectedly, but it works in theory
	
	const {Render: RenderPopups, AddPopup, SetPopupState, shouldShowOverlay} = PopupManager();

	useEffect(()=>{
		AddPopup("SettingsMenu", false, (onRequestClose, isOpen)=>{
			return <SettingsPage
				onRequestClose={onRequestClose}
				isOpen={isOpen}
			/>
		})
	}, [])
	
	return <>
		<style jsx global>{`
			body {
				background-color: ${Settings.currentState.backgroundColor};
				color: ${Settings.currentState.textColor};
				font-family: 'SF Mono', 'Roboto', sans-serif;
			}


			@import
			url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')
		`}</style>
		<Head>
			<title>
				Oh baby a triple!
			</title>
		</Head>
		<noscript>
			<div style={{position: "fixed", width: "100%", height: "100%", backgroundColor: "grey", zIndex: 100}}>
			<h1>Enable javascript retard.</h1>
			<a href="https://www.nhentai.net/g/364624">Click me for a surprise</a>
			<span style={{ display: 'none' }}>Just kidding dont click it lmao</span>
			</div>
		</noscript>
		<div key="mainContainer" style={{position: "fixed", width: "100%", height: "100%"}}>
			<div key="content" style={{ width: "100%", maxWidth: 1200, position:"absolute", left: "50%", transform: "translate(-50%)", display:"flex"}}>
				<div key="sidebarLeft" style={{width: 200, minWidth: 200}}>
					Photopcopy
					<button onClick={()=>{
						SetPopupState("SettingsMenu", true)
					}}>Open Settings</button>
				</div>
				<div key="postContainer" style={{width: "100%"}}>
					<Post postId="bruj"/>
				</div>
				<div key="sidebarRight" style={{minWidth: 200, width: 200}}>
					Roblox Ad Goes here
				</div>
			</div>
		</div>
		<div style={{width: "100%", height: "100%", position: "fixed", pointerEvents: shouldShowOverlay?"unset":"none", backdropFilter: shouldShowOverlay?"blur(5px)":"", transition: "blur .5s"}}/>
		{RenderPopups()}
	</>
}

export default App;