/**
 * middleman between stuff that changes settings and stuff that uses settings
 * it transform settings such as the theme into a series of "computed" settings (mainly styles), this way stuff is easier to tweak
 */

// i don't actually plan to add any languages, this is just for forward compatibility, retarded is just a test "language" to see if it works
import * as english from "../resources/localization/english.json"
import * as retarded from "../resources/localization/retarded.json"

const languages = {english, retarded}

interface ComputedSettings {
	backgroundColorTertiary: string;
	backgroundColorQuaternary: string;
	backgroundColor: string;
	textColor: string;
	backgroundColorSecondary: string;
	accentColor: string;
	textColorSecondary: string;
	textColorInverted: string;
	strings: typeof languages["english"];
}

interface UserSettings {
	language: keyof typeof languages;
	theme: "darkMode" | "lightMode"
	accent: string
}

class SettingsClass {
	static instance = new SettingsClass({});
	_update?: ()=>void
	currentState: ComputedSettings
	
	current: UserSettings = {theme: "darkMode", accent: "#5ab7fa", language: "english"};

	private setters = {
		accent(currentState: ComputedSettings, accent: UserSettings["accent"]){
			currentState.accentColor = String(accent)
		},
		theme(currentState: ComputedSettings, theme: UserSettings["theme"]){
			switch (theme) {
				case "darkMode":
					currentState.backgroundColor = "#151617";
					currentState.textColor = "#FFFFFF";
					currentState.textColorSecondary = "#CCC";
					currentState.backgroundColorSecondary = "#2A2A37";
					currentState.backgroundColorTertiary = "#24242E"
					currentState.backgroundColorQuaternary = "#1F1F28"
					currentState.textColorInverted = "#000000"
					break;
				case "lightMode":
					currentState.backgroundColor = "#FFFFFF";
					currentState.textColor = "#000";
					currentState.textColorSecondary = "#333";
					currentState.backgroundColorSecondary = "#D9D9D9";
					currentState.backgroundColorTertiary = "#E3E3E3";
					currentState.backgroundColorQuaternary = "#EBEBEB"
					currentState.textColorInverted = "#FFFFFF"
					break;
			}
		},
		language(currentState: ComputedSettings, language: UserSettings["language"]){
			currentState.strings = languages[language]
		}
	}

	set<propName extends keyof UserSettings>(prop: propName, value: UserSettings[propName], shouldUpdate?: false) {
		(this.setters[prop] as (state: ComputedSettings, value: unknown)=>void)(this.currentState, value)
		this.update();
	}

	update(){
		if (this._update) {
			this._update()
		}
	}

	constructor(initialSettings: Partial<UserSettings>){
		this.currentState = {} as ComputedSettings
		for (const prop in this.current) {
			if (prop in initialSettings) {
				this.set(prop as keyof UserSettings, initialSettings[prop as keyof UserSettings] as UserSettings[keyof UserSettings], false)
			} else {
				this.set(prop as keyof UserSettings, this.current[prop as keyof UserSettings] as UserSettings[keyof UserSettings], false);
			}
		}
		this.update();
	}
}

const Settings = SettingsClass.instance

export {Settings}
export type {ComputedSettings}