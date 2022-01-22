import { useState } from "react";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
import React from "react";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function Checkbox<items extends string[]>(props: {
	items: items;
	default: { [k: number]: true };
	updated: (current: { [k: number]: boolean }) => void;
}) {
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	const map: { [s: number]: boolean } = {};
	props.items.forEach((_, index) => {
		map[index] = props.default[index] || false;
	});

	const [current, setCurrent] = useState(map);
	const [nonce, update] = useState(0);
	return (
		<div>
			{props.items.map((value, index) => {
				return (
					<div key={index} style={{ display: "flex", marginTop: 4 }} title={value}>
						<button
							data-selected={current[index]}
							onClick={() => {
								current[index] = !current[index];
								props.updated(current);
								update(nonce + 1);
							}}
							className={SettingsPageStyles.checkbox}
						>
							<div
								className={SettingsPageStyles.inner}
								style={{
									backgroundColor: settings.accentColor,
								}}
							/>
						</button>
						<div style={{ width: "100%", position: "relative" }}>
							<div
								style={{
									position: "absolute",
									left: 10,
									top: "50%",
									transform: "translateY(-50%)",
									overflow: "hidden",
									width: "calc(100% - 5px)",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
								}}
							>
								{value}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export { Checkbox };
