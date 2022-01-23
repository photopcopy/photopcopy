import React, { useState } from "react";
import ReactModal from "react-modal";
import { AccentOption } from "./accentoption";
import { Checkbox } from "./checkbox";
import { Page } from "./page";
import { RadioSelection } from "./radioselection";
import { Section } from "./section";
import { TabButton } from "./tabbutton";
import { languages } from "../../lib/localizationmanager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState, settingsSelector, updateSettings } from "../../lib/store";
import SettingsPageStyles from "../../styles/modals/settingspage.module.scss";
import CopyToClipboard from "react-copy-to-clipboard";

const enum PageType {
	Account,
	Appearance,
	Privacy,
	Sessions,
	Language,
}

function SettingsPage(props: { onRequestClose: () => void; isOpen: boolean; state: {} }) {
	const settings = useSelector(settingsSelector);
	const dispatch = useDispatch();

	const strings = languages[settings.language].settingspage;
	const [page, setPage] = useState<PageType>(PageType.Account);

	return (
		<ReactModal
			isOpen={props.isOpen}
			closeTimeoutMS={500}
			onAfterClose={() => {}}
			ariaHideApp={false}
			className={`${SettingsPageStyles.settingspage}`}
			style={{
				content: {
					display: "flex",
					flexDirection: "column",
				},
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			<header>
				{strings.title}
				<FontAwesomeIcon
					cursor="pointer"
					style={{ position: "absolute", right: 10, width: 30, height: 30 }}
					onClick={() => {
						props.onRequestClose();
					}}
					icon={faTimes}
				/>
			</header>
			<div className={SettingsPageStyles.body} key="body">
				<aside key="sidebar">
					<TabButton
						self={PageType.Account}
						current={page}
						onClick={() => {
							setPage(PageType.Account);
						}}
					>
						{strings.tabs.account}
					</TabButton>
					<TabButton
						self={PageType.Appearance}
						current={page}
						onClick={() => {
							setPage(PageType.Appearance);
						}}
					>
						{strings.tabs.appearance}
					</TabButton>
					<TabButton
						self={PageType.Privacy}
						current={page}
						onClick={() => {
							setPage(PageType.Privacy);
						}}
					>
						{strings.tabs.privacy}
					</TabButton>
					<TabButton
						self={PageType.Sessions}
						current={page}
						onClick={() => {
							setPage(PageType.Sessions);
						}}
					>
						{strings.tabs.sessions}
					</TabButton>
					<TabButton
						self={PageType.Language}
						current={page}
						onClick={() => {
							setPage(PageType.Language);
						}}
					>
						{strings.tabs.language}
					</TabButton>
				</aside>
				<div key="contentContainer" style={{ position: "relative", width: "100%", height: "100%" }}>
					<AccountPage current={page} />
					<Page self={PageType.Appearance} current={page}>
						<Section title={strings.sections.theme.title}>
							<RadioSelection
								items={[strings.sections.theme.lightMode, strings.sections.theme.darkMode]}
								default={["light", "dark"].indexOf(settings.theme)}
								updated={(value) => {
									switch (value) {
										case 0:
											dispatch(updateSettings({ theme: "light" }));
											break;
										case 1:
											dispatch(updateSettings({ theme: "dark" }));
											break;
									}
								}}
							/>
						</Section>
						<Section title={strings.sections.accentColor.title}>
							<div style={{ display: "flex" }}>
								<AccentOption color="red" />
								<AccentOption color="orange" />
								<AccentOption color="yellow" />
								<AccentOption color="#00FF00" />
								<AccentOption color="#5ab7fa" />
								<AccentOption color="purple" />
							</div>
						</Section>
						<Section title={strings.sections.textSize.title}>
							<span className={SettingsPageStyles.description}>Does not work yet lol</span>
							<RadioSelection
								items={["Cozy", "Compact"]}
								default={0}
								updated={(value) => {
									// this will be changed in the future
									switch (value) {
										case 0:
											dispatch(updateSettings({ postTextSize: 30 }));
											break;
										case 1:
											dispatch(updateSettings({ postTextSize: 20 }));
											break;
									}
								}}
							/>
						</Section>
						<Section title={strings.sections.embeds.title}>
							<span className={SettingsPageStyles.description}>
								{strings.sections.embeds.description}
							</span>
							<Checkbox
								items={[
									strings.sections.embeds.embedYouTube,
									strings.sections.embeds.embedTwitchStreams,
									strings.sections.embeds.embedTwitchLiveChat,
									strings.sections.embeds.embedGIFs,
									strings.sections.embeds.embedScratch,
									strings.sections.embeds.embedCodeDotOrg,
								]}
								default={{ 0: true, 1: true, 2: true }}
								updated={() => {}}
							/>
						</Section>
					</Page>
					<Page self={PageType.Privacy} current={page}>
						<Section title={strings.sections.blockedUsers.title}>tba</Section>
					</Page>
					<Page self={PageType.Sessions} current={page}>
						<Section title={strings.sections.activeSessions.title}>
							<button
								style={{ backgroundColor: settings.accentColor }}
								className={SettingsPageStyles.signout_btn}
							>
								{strings.sections.activeSessions.signOutAll}
							</button>
						</Section>
					</Page>
					<Page self={PageType.Language} current={page}>
						<Section title={strings.sections.language.title}>
							<span className={SettingsPageStyles.description}>
								{strings.sections.language.description}
							</span>
							<RadioSelection
								items={[strings.sections.language.english, strings.sections.language.retarded]}
								default={0}
								updated={(value) => {
									switch (value) {
										case 0:
											dispatch(updateSettings({ language: "english" }));
											break;
										case 1:
											dispatch(updateSettings({ language: "retarded" }));
											break;
									}
								}}
							/>
						</Section>
					</Page>
				</div>
			</div>
		</ReactModal>
	);
}

function AccountPage({ current: page }: { current: PageType }) {
	const settings = useSelector(settingsSelector);

	const strings = languages[settings.language].settingspage;

	const { username, token } = useSelector((state: RootState) => state.user);

	return (
		<Page self={PageType.Account} current={page}>
			<Section title={strings.sections.account.title}>
				<div style={{ display: "flex" }}>
					<span style={{ marginRight: 4 }}>{strings.sections.account.username}:</span>
					<span
						style={{
							marginRight: 5,
							display: "inline-block",
							overflow: "hidden",
							maxWidth: 120,
							textOverflow: "ellipsis",
						}}
					>
						{username}
					</span>
					<button
						className={SettingsPageStyles.edit_btn}
						style={{
							backgroundColor: settings.accentColor,
						}}
					>
						Edit
					</button>
				</div>
				<div style={{ display: "flex" }}>
					<span style={{ marginRight: 4 }}>{strings.sections.account.token}</span>{" "}
					<CopyToClipboard text={token}>
						<button
							className={SettingsPageStyles.edit_btn}
							style={{
								backgroundColor: settings.accentColor,
							}}
						>
							Copy
						</button>
					</CopyToClipboard>
				</div>
			</Section>
		</Page>
	);
}

export { SettingsPage, PageType as PageTypes };
