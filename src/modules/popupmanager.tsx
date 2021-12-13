//i have no idea how it works but it just works

import React from "react";

// future me: not a functional component but will always be called in index.tsx so it's okay to use useState
// basically the state is for the index.tsx app component, not sure if this is antipattern but /shrug
// TODO: make it so it doesn't rerender every other popup when one of them is opened/closed (too lazy probably not going to happen)
function PopupManager() {
	const [popups, setPopups] = React.useState<PopupObj[]>([]);
	const [state] = React.useState({ popups, setPopups, record: {} as Record<string, PopupObj> });

	type PopupObj = { open: boolean; key: string; renderFunction: (open: boolean) => React.ReactElement };

	state.setPopups = setPopups;
	state.popups = popups;

	function AddPopups(
		popups: {
			key: string;
			isOpen: boolean;
			callback: (onRequestClose: () => void, isOpen: boolean) => React.ReactElement;
		}[],
	) {
		const objs: PopupObj[] = [];
		for (const { key, isOpen, callback } of popups) {
			const obj: PopupObj = {
				open: isOpen,
				key: key,
				renderFunction: (open) => {
					return callback(() => {
						obj.open = false;
						state.setPopups([...state.popups]);
					}, open);
				},
			};
			state.record[key] = obj;
			objs.push(obj);
		}
		state.setPopups([...state.popups, ...objs]);
	}

	/** @deprecated Can't add 2 popups at the same time since this thing is designed so shittily*/
	function AddPopup(
		key: string,
		isOpen: boolean,
		callback: (onRequestClose: () => void, isOpen: boolean) => React.ReactElement,
	) {
		const obj: PopupObj = {
			open: isOpen,
			key: key,
			renderFunction: (open) => {
				return callback(() => {
					obj.open = false;
					state.setPopups([...state.popups]);
				}, open);
			},
		};
		state.record[key] = obj;
		state.setPopups([...state.popups, obj]);
	}

	function Render() {
		return popups.map((obj) => {
			return <React.Fragment key={obj.key}>{obj.renderFunction(obj.open)}</React.Fragment>;
		});
	}

	function SetPopupState(key: string, open: boolean) {
		state.record[key].open = open;
		state.setPopups([...state.popups]);
	}

	return { Render, AddPopup, AddPopups, SetPopupState, shouldShowOverlay: !popups.every((popup) => !popup.open) };
}

export { PopupManager };
