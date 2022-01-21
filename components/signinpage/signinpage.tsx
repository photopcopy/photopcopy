import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ReactModal from "react-modal";
import { Settings } from "../../lib/settings";
import themes from "../../lib/themes";
import SignInPageStyles from "../../styles/modals/signinpage.module.scss";

export function SignInPage(props: {
	isOpen: boolean;
	onRequestClose: () => void;
	state: { page: "signin" | "register" };
}) {
	const settings = useContext(Settings);

	return (
		<ReactModal
			key="signinpage"
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			className={`${SignInPageStyles.signinpage}`}
			style={{
				content: {
					display: "flex",
					flexDirection: "column",
				},
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			{/* TODO: use localization*/}
			<div
				style={{
					position: "absolute",
					padding: 10,
					transition: "left .5s",
					display: "flex",
					flexDirection: "column",
					left: 0,
				}}
			>
				<button
					className={SignInPageStyles.closebtn}
					onClick={() => {
						props.onRequestClose();
					}}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<h3 style={{ margin: 0 }}>Sign In</h3>
				<p>Photopcopy is your happy. You will be happy. You will make Photopcopy account.</p>
				<input placeholder="Username"></input>
				<input type="password" placeholder="Password"></input>
				<div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
					<button
						className={SignInPageStyles.primarybtn}
						key="SignInPage"
						style={{
							backgroundColor: settings.accentColor,
							width: "100%",
							marginRight: 4,
							borderRadius: 4,
						}}
					>
						Sign In
					</button>
					<button
						className={SignInPageStyles.secondarybtn}
						key="Register"
						style={{ width: "100%", marginLeft: 4, borderRadius: 4 }}
					>
						Register
					</button>
				</div>
			</div>
			<div style={{ position: "absolute", transition: "left .5s", left: 0 }}></div>
		</ReactModal>
	);
}
