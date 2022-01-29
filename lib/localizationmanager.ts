import * as english from "../resources/localization/english.json";
import * as retarded from "../resources/localization/retarded.json";

type L = { [s: string]: L | string };
// have english as the fallback in case another language does not have a certain string;
// basically create a deep copy of source but use the values of obj whenever possible

function deepCopyWithTemplate<T extends L>(source: T, obj: T) {
	const result: L = {};
	for (const k in source) {
		const v = source[k];
		if (typeof v === "string") {
			result[k] = obj[k] || source[k];
		} else if (obj[k]) {
			const ov = obj[k];
			// could also choose to ignore instead of throwing error. deepCopyWithTemplate(v, {});
			if (typeof ov === "string") throw new Error(`src[k] different type then obj[k]`);
			result[k] = deepCopyWithTemplate(v, ov);
		} else {
			result[k] = deepCopyWithTemplate(v, {});
		}
	}
	return result as T;
}

const languages: Record<"english" | "retarded", typeof english> = {
	english,
	retarded: deepCopyWithTemplate(english, retarded),
};

export { languages };
