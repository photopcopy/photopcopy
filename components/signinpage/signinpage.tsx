import { useContext } from "react";
import ReactModal from "react-modal";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";

export function SignInPage(props: {
	isOpen: boolean;
	onRequestClose: () => void;
	state: { page: "signin" | "register" };
}) {
	const settings = useContext(Settings);
	const theme = themes[settings.theme];

	return (
		<ReactModal
			key="signinpage"
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			className={`${theme.backgroundSecondary} ${theme.textPrimary}`}
			style={{
				content: {
					position: "absolute",
					inset: "50% 0% 0% 50%",
					transform: "translate(-50%, -50%)",
					height: "50%",
					width: "30%",
					maxWidth: "300px",
					maxHeight: "400px",
					minWidth: "200px",
					minHeight: "200px",
					borderRadius: 8,
					overflow: "hidden",
					display: "flex",
					flexDirection: "column",
					border: "none",
				},
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			{/* TODO: use localization*/}
			<div
				style={{
					position: "absolute",
					width: "calc(100% - 20px)",

					padding: 10,
					transition: "left .5s",
					display: "flex",
					flexDirection: "column",
					left: 0,
				}}
			>
				<h3 style={{ margin: 0 }}>Sign In</h3>
				<p className={`${theme.textSecondary}`}>
					Photopcopy is your happy. You will be happy. You will make Photopcopy account.
				</p>
				<input placeholder="Username"></input>
				<input placeholder="Password"></input>
				<div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
					<button key="SignInPage" style={{ width: "100%", marginRight: 4, borderRadius: 4 }}>
						Sign In
					</button>
					<button key="Register" style={{ width: "100%", marginLeft: 4, borderRadius: 4 }}>
						Register
					</button>
				</div>
			</div>
			<div style={{ position: "absolute", transition: "left .5s", left: 0 }}></div>
		</ReactModal>
	);
}
