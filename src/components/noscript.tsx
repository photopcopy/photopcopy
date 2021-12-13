// moved to a different file so i dont have to scroll down 100 lines to get to where i need
export function NoScript() {
	return (
		<noscript>
			<div
				style={{
					position: "fixed",
					width: "100%",
					height: "100%",
					backgroundColor: "grey",
					zIndex: 100,
				}}
			>
				<h1>Enable javascript retard.</h1>
				<a href="https://www.nhentai.net/g/364624">Click me for a surprise</a>
				<span style={{ opacity: 0.04 }}>Just kidding dont click it lmao</span>
			</div>
		</noscript>
	);
}
