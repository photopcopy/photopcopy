import lightMode from "../styles/themes/light.module.css";
import darkMode from "../styles/themes/dark.module.css";

class ThemeGetter {
	private styles: typeof lightMode;
	get backgroundPrimary() {
		return this.styles["background-primary"];
	}
	get backgroundSecondary() {
		return this.styles["background-secondary"];
	}
	get backgroundTertiary() {
		return this.styles["background-tertiary"];
	}
	get backgroundQuaternary() {
		return this.styles["background-quaternary"];
	}
	get textPrimary() {
		return this.styles["text-primary"];
	}
	get textSecondary() {
		return this.styles["text-secondary"];
	}
	get textInverted() {
		return this.styles["text-inverted"];
	}
	constructor(styles: typeof lightMode) {
		this.styles = styles;
	}
}

const themes = {
	light: new ThemeGetter(lightMode),
	dark: new ThemeGetter(darkMode),
};

export default themes;
