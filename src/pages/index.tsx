import React, { useState } from 'react'
import Head from 'next/head'
import { Popup as PopupContainer } from '../components/popup'
import { Settings, ComputedSettings } from '../scripts/settings'
import { Icon } from '../components/icon'
import { TabButton } from '../components/tabbutton'
import { SettingsPage } from '../components/settingspage'
import { Post } from '../components/post'

// apparently photop is all the same page which is really weird but /shrug

function Main(props: React.PropsWithChildren<{}>) {
	return <div key="mainContent" style={{position: "fixed"}}>
		{props.children}
	</div>
}

function App() {
	const [nonce, update] = useState(0);
	Settings._update = ()=>{
		update(nonce+1)
	};

	//it counts up for every popup, and counts down everytime one is closed, that way you can have 0 to indicate that all popups are closed
	//im not sure if this could lead to a bug if the number is unexpectedly, but it works in theory
	const [popupsShown, setPopupsShown] = useState(1);

	let _SetSettingsOpen: (value: boolean)=>void;
	function SetSettingsOpen(value: boolean){
		if (value) {
			setPopupsShown(popupsShown+1);
		} else {
			setPopupsShown(popupsShown-1)
		}
		_SetSettingsOpen(value);
	}

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
			<link rel="stylesheet" href="../styles/global.css"></link>
		</Head>
		<noscript>
			<h1>Enable javascript retard.</h1>
			<a href="https://www.nhentai.net/g/364624">Click me for a surprise</a>
			<span style={{ display: 'none' }}>Just kidding dont click it lmao</span>
		</noscript>
		<Main>
			<div style={{width: 500, left: 100, position:"absolute"}}>
				<Post postId="bruh"/>
				<Post postId="bruh"/>
				<Post postId="bruh"/>
				<Post postId="bruh"/>

			</div>
		</Main>
		<div style={{width: "100%", height: "100%", position: "fixed", pointerEvents: popupsShown?"unset":"none", backdropFilter: popupsShown?"blur(5px)":""}}>
			<SettingsPage
				onClosed={
					()=>{
						SetSettingsOpen(false)
					}
				}
				getClosedSetter={(callback)=>{
					_SetSettingsOpen = callback;
				}}
			/>
		</div>
	</>
}

export default App;