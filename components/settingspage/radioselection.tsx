import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../lib/store";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";

function RadioSelection(props: { items: string[]; default: number; updated: (current: number) => void }) {
	const [current, setCurrent] = useState(props.default);
	const settings = useSelector(settingsSelector);

	return (
		<div>
			{props.items.map((value, index) => {
				return (
					<div key={index} style={{ display: "flex", marginTop: 4 }}>
						<button
							data-selected={current === index}
							className={SettingsPageStyles.radio_select}
							onClick={() => {
								setCurrent(index);
								props.updated(index);
							}}
						>
							<div
								className={SettingsPageStyles.inner}
								style={{
									backgroundColor: settings.accentColor,
									borderRadius: "100%",
								}}
							/>
						</button>
						<div style={{ width: "100%", position: "relative" }}>
							<div style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}>
								{value}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export { RadioSelection };
