import React from "react";
interface ISettings {
	color: string;
}
const Settings = React.createContext<ISettings>({ color: "red" });

function Bruh() {
	const a = React.useContext(Settings);
	return <div>{a.color}</div>;
}

function ContextTest() {
	const [currentSettings, updateCurrentSettings] = React.useState<ISettings>({ color: "red" });
	return (
		<Settings.Provider value={currentSettings}>
			<Bruh />
			<button
				onClick={() => {
					updateCurrentSettings({ color: "blue" });
				}}
			>
				Click Me
			</button>
		</Settings.Provider>
	);
}
export default ContextTest;
