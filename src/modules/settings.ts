import { createContext } from "react";
import { languages } from "./localizationmanager";
interface ISettings {
	theme: "dark" | "light";
	language: keyof typeof languages;
	accentColor: string;

	update: () => void;
}

const Settings = createContext<ISettings>({
	theme: "dark",
	language: "english",
	accentColor: "#5ab7fa",
	update: () => {},
});
Settings.displayName = "SettingsContext";

export { Settings };
export type { ISettings };
