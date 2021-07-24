//i have no idea how it works but it just works

import React from "react";

function PopupManager() {
	const [popups, setPopups] = React.useState<PopupObj[]>([]);
	const [state] = React.useState({ popups, setPopups, record: {} as Record<string, PopupObj> });

	type PopupObj = { open: boolean; key: string; renderFunction: (open: boolean) => React.ReactElement };

	state.setPopups = setPopups;
	state.popups = popups;

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

	return { Render, AddPopup, SetPopupState, shouldShowOverlay: !popups.every((popup) => !popup.open) };
}

export { PopupManager };
