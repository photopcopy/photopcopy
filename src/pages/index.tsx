import React, { useState } from 'react'
import Head from 'next/head'
import { Popup as PopupContainer } from '../components/popup'
import { Settings, ComputedSettings } from '../scripts/settings'
import { Icon } from '../components/icon'
import { TabButton } from '../components/tabbutton'
import { SettingsPage } from '../components/settingspage'

// apparently photop is all the same page which is really weird but /shrug

function Main(props: React.PropsWithChildren<{}>) {
	return <div key="mainContent">
		{props.children}
	</div>
}

function App() {
	const [nonce, update] = useState(0);
	Settings._update = ()=>{
		update(nonce+1)
	};

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
			<h1>Enable javascript retard.</h1>
			<a href="https://www.nhentai.net/g/364624">Click me for a surprise</a>
			<span style={{ display: 'none' }}>Just kidding dont click it lmao</span>
		</noscript>
		<Main></Main>
		<PopupContainer>
		<SettingsPage/>
		</PopupContainer>
	</>
}

export default App;