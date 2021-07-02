interface ComputedSettings {
	backgroundColor: string;
	textColor: string;
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
					break;
				case "lightMode":
					break;
			}
		}
	}

	set(prop: keyof UserSettings, value: UserSettings[keyof UserSettings]) {
		this.setters[prop](this.currentState, value)
		this.update();
	}

	update(){
		if (this._update) {
			this._update(this.currentState)
		}
	}

	constructor(initialSettings: Partial<UserSettings>){
		this.currentState = {} as ComputedSettings
		for (const prop in initialSettings) {
			this.set(prop as keyof UserSettings, initialSettings[prop as keyof UserSettings] as UserSettings[keyof UserSettings])
		}		
	}
}

const Settings = SettingsClass.instance

export {Settings, ComputedSettings}