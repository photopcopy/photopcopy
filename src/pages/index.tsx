import React from 'react'
import Head from 'next/head'
import { Popup as PopupContainer } from '../components/popup'
import { Settings, ComputedSettings } from '../scripts/settings'
import { Icon } from '../components/icon'
import { TabButton } from '../components/tabbutton'

// apparently photop is all the same page which is really weird but /shrug

function Main() {
	return <div key="mainContent">
		
	</div>
}

function App() {
	const [state, setState] = React.useState<ComputedSettings>(Settings.currentState)
	Settings._update = setState

	return <>
		<style jsx global>{`
			body {
				background-color: ${state.backgroundColor};
				color: ${state.textColor};
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
			<div key="settingsMenu" style={{ width: '100%', height: '100%', backgroundColor: state.backgroundColorSecondary, borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
				<div key="topbar" style={{ userSelect: 'none', width: '100%', height: 60, display: 'flex', alignItems: 'center', boxSizing: 'border-box', padding: 10, backgroundColor: state.backgroundColorTertiary, borderBottom: `solid ${state.backgroundColorQuaternary}` }}>
					<div style={{ width: '100%', height: '100%', fontSize: 40 }}>Settings</div>
					<div key="topbarRight" style={{ float: 'right' }}><Icon type="close"></Icon></div>
				</div>
				<div style={{ width: 150, height: '100%', backgroundColor: state.backgroundColorTertiary, borderRight: `solid ${state.backgroundColorQuaternary}` }}>
					<TabButton>Click Me</TabButton>
				</div>
			</div>
		</PopupContainer>
	</>
}

export default App
