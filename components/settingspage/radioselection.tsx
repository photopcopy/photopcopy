import React from "react";
import { useState } from "react";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";

function RadioSelection(props: { items: string[]; default: number; updated: (current: number) => void }) {
	const [current, setCurrent] = useState(props.default);
	const settings = React.useContext(Settings);
	const theme = themes[settings.theme];

	return (
		<div>
			{props.items.map((value, index) => {
				return (
					<div key={index} style={{ display: "flex", marginTop: 4 }}>
						<div
							className={theme.backgroundSecondary}
							onClick={() => {
								setCurrent(index);
								props.updated(index);
							}}
							style={{
								position: "relative",
								cursor: "pointer",
								display: "inline-block",
								width: 20,
								height: 20,
								padding: 5,
								borderRadius: "100%",
							}}
						>
							<div
								style={{
									backgroundColor: settings.accentColor,
									borderRadius: "100%",
									width: current === index ? "calc(100% - 10px)" : "0%",
									height: current === index ? "calc(100% - 10px)" : "0%",
									opacity: current === index ? 1 : 0,
									left: "50%",
									top: "50%",
									transform: "translate(-50%, -50%)",
									position: "absolute",
									transition: "opacity .2s, width .2s, height .2s",
								}}
							/>
						</div>
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
