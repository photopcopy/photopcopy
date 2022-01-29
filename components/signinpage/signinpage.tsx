import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, settingsSelector } from "../../lib/store";
import SignInMenuStyles from "../../styles/modals/signinmenu.module.scss";

export function SignInPage(props: {
	isOpen: boolean;
	onRequestClose: () => void;
	state: { page: "signin" | "register" };
}) {
	const settings = useSelector(settingsSelector);
	const dispatch = useDispatch();

	return (
		<ReactModal
			key="signinpage"
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			className={`${SignInMenuStyles.signinmenu} ${SignInMenuStyles[props.state.page]}`}
			style={{
				content: {
					display: "flex",
					flexDirection: "column",
				},
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			{/* TODO: use localization*/}
			<form
				action="javascript:void(0);"
				className={SignInMenuStyles.container}
				style={{
					left: props.state.page === "signin" ? 0 : "-100%",
				}}
			>
				<h2 style={{ margin: 0 }}>Sign In</h2>
				<p>Sign in to Photopcopy. Best social media ever.</p>
				<input placeholder="Username"></input>
				<input type="password" placeholder="Password"></input>

				<p style={{ fontSize: 13 }}>
					Forgot your password? Not my problem. You could try emailing{" "}
					<a style={{ color: "cyan" }} href="mailto:photopcopy@gmail.com">
						photopcopy@gmail.com
					</a>{" "}
					to see if you can get your account back tho.
				</p>

				<footer>
					<button
						className={SignInMenuStyles.primarybtn}
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
						className={SignInMenuStyles.secondarybtn}
						key="Register"
						style={{ width: "100%", marginLeft: 4, borderRadius: 4 }}
						onClick={() => {
							dispatch(
								openPopup({
									name: "SignInMenu",
									state: {
										page: "register",
									},
								}),
							);
						}}
					>
						Register
					</button>
				</footer>
			</form>
			<form
				className={SignInMenuStyles.container}
				style={{
					left: props.state.page === "signin" ? "100%" : 0,
				}}
			>
				<h2 style={{ margin: 0 }}>Register</h2>
				<p style={{ marginBottom: 20 }}>
					Photopcopy is your happy. You will be happy. You will make Photopcopy account.
				</p>
				<input placeholder="Username"></input>
				<input type="password" placeholder="Password"></input>
				<input type="password" placeholder="Confirm Password"></input>
				<input placeholder="Email (Optional)"></input>
				<p style={{ fontSize: 13 }}>
					Privacy good. Email bad. We no bad like Photop and we won{"'"}t require your email.
				</p>
				<footer>
					<button
						className={SignInMenuStyles.primarybtn}
						key="SignInPage"
						style={{
							backgroundColor: settings.accentColor,
							width: "100%",
							marginRight: 4,
							borderRadius: 4,
						}}
					>
						Register
					</button>
					<button
						className={SignInMenuStyles.secondarybtn}
						key="Register"
						style={{ width: "100%", marginLeft: 4, borderRadius: 4 }}
						onClick={() => {
							dispatch(
								openPopup({
									name: "SignInMenu",
									state: {
										page: "signin",
									},
								}),
							);
						}}
					>
						Sign In
					</button>
				</footer>
			</form>
			<button
				className={SignInMenuStyles.closebtn}
				onClick={() => {
					props.onRequestClose();
				}}
			>
				<FontAwesomeIcon icon={faTimes} />
			</button>
		</ReactModal>
	);
}
