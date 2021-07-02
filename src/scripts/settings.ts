interface ComputedSettings {
	backgroundColorTertiary: string;
	backgroundColorQuaternary: string;
	backgroundColor: string;
	textColor: string;
	backgroundColorSecondary: string;
}

interface UserSettings {
	theme: "darkMode" | "lightMode"
	
}

class SettingsClass {
	static instance = new SettingsClass({});
	_update?: React.Dispatch<React.SetStateAction<ComputedSettings>>
	currentState: ComputedSettings
	
	current: UserSettings = {theme: "darkMode"};

	private setters = {
		theme(currentState: ComputedSettings, theme: UserSettings["theme"]){
			
			switch (theme) {
				case "darkMode":
					currentState.backgroundColor = "#151617";
					currentState.textColor = "#FFFFFF";
					currentState.backgroundColorSecondary = "#2A2A37";
					currentState.backgroundColorTertiary = "#24242E"
					currentState.backgroundColorQuaternary = "#1F1F28"
					break;
				case "lightMode":
					currentState.backgroundColor = "#FFFFFF";
					currentState.textColor = "#000";
					currentState.backgroundColorSecondary = "#D9D9D9";
					break;
			}
		}
	}

	set(prop: keyof UserSettings, value: UserSettings[keyof UserSettings], shouldUpdate?: false) {
		this.setters[prop](this.currentState, value)
		if (shouldUpdate === false) {
			this.update();
		}
	}

	update(){
		if (this._update) {
			this._update(this.currentState)
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
		console.log(this.currentState)
	}
}

const Settings = SettingsClass.instance

export {Settings, ComputedSettings}