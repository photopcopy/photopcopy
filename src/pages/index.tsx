import React from "react";
import Head from 'next/head'
import { Popup as PopupContainer } from "../components/popup";
import { Settings, ComputedSettings } from "../scripts/settings";

//apparently photop is all the same page which is really weird but /shrug

function Main(){
	return <div key="mainContent">

	</div>
}

function App(){
	const [state, setState] = React.useState<ComputedSettings>(Settings.currentState)
	Settings._update = setState;

	return <>
		<style jsx global>{`
			body {
				background-color: ${state.backgroundColor};
				text-color: ${state.textColor};
			}
		`}</style>
		<Head>
			<title>
				Oh baby a triple!
			</title>
		</Head>
		<noscript>
			<h1>Enable javascript retard.</h1>
			<a href="https://www.nhentai.net/g/364624">Click me for a surprise</a>
			<span style={{display:"none"}}>Just kidding dont click it lmao</span>
		</noscript>
		<Main></Main>
		<PopupContainer>
			<div>
				BRUH
			</div>
		</PopupContainer>
	</>
}

export default App