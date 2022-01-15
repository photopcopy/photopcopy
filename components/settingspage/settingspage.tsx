import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { Settings } from "../../lib/settings";
import { AccentOption } from "./accentoption";
import { Checkbox } from "./checkbox";
import { Page } from "./page";
import { RadioSelection } from "./radioselection";
import { Section } from "./section";
import { TabButton } from "./tabbutton";
import themes from "../../lib/themes";
import { languages } from "../../lib/localizationmanager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

enum PageType {
	Account,
	Appearance,
	Privacy,
	Sessions,
	Language,
}

function AccountPage({ current: page }: { current: PageType }) {
	const settings = useContext(Settings);

	const theme = themes[settings.theme];
	const strings = languages[settings.language].settingspage;

	const { username } = useSelector((state: RootState) => state.user);

	return (
		<Page self={PageType.Account} current={page}>
			<Section title={strings.sections.account.title}>
				<div style={{ display: "flex" }}>
					<span>{strings.sections.account.username}:</span>
					<span
						style={{
							margin: "0px 5px",
							display: "inline-block",
							overflow: "hidden",
							maxWidth: 120,
							textOverflow: "ellipsis",
						}}
					>
						{username}
					</span>
					<button
						className={`${theme.textInverted}`}
						style={{
							backgroundColor: settings.accentColor,
							float: "right",
							margin: 0,
							border: "none",
							cursor: "pointer",
						}}
					>
						Edit
					</button>
				</div>
			</Section>
		</Page>
	);
}

function SettingsPage(props: { onRequestClose: () => void; isOpen: boolean }) {
	const settings = useContext(Settings);

	const theme = themes[settings.theme];
	const strings = languages[settings.language].settingspage;
	const [page, setPage] = useState<PageType>(PageType.Account);

	return (
		<ReactModal
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
					width: "50%",
					maxWidth: "min(600px, 100vw)",
					minWidth: "min(450px, 100vw)",
					maxHeight: "400px",
					minHeight: "200px",
					borderRadius: 8,
					overflow: "hidden",
					flexDirection: "column",
					border: "none",
					padding: 0,
					//display: "flex"
				},
				overlay: { position: "fixed", inset: 0, backgroundColor: "rgb(0, 0, 0, 0)" },
			}}
		>
			<div
				key="topbar"
				className={theme.backgroundTertiary}
				style={{
					userSelect: "none",
					width: "100%",
					height: 60,
					display: "flex",
					alignItems: "center",
					boxSizing: "border-box",
					padding: 10,
					//borderBottom: `solid ${Settings.currentState.backgroundColorQuaternary}`,
				}}
			>
				<div style={{ width: "100%", height: "100%", fontSize: 40 }}>{strings.title}</div>
				<div key="topbarRight" style={{ float: "right" }}>
					<FontAwesomeIcon
						cursor="pointer"
						style={{ width: 30, height: 30 }}
						onClick={() => {
							props.onRequestClose();
						}}
						icon={faTimes}
					/>
				</div>
			</div>
			<div key="body" style={{ width: "100%", height: "calc(100% - 60px)", display: "flex", overflow: "hidden" }}>
				<div
					key="sidebar"
					className={theme.backgroundQuaternary}
					style={{
						minWidth: 150,
						width: 150,
						padding: 5,
						borderTopRightRadius: 8,
						height: "100%",
						//borderRight: `solid ${Settings.currentState.backgroundColor}`,
					}}
				>
					{
						<>
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
						</>
					}
				</div>
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
											settings.theme = "light";
											break;
										case 1:
											settings.theme = "dark";
											break;
									}
									settings.update();
								}}
							/>
						</Section>
						<Section title={strings.sections.accentColor.title}>
							<AccentOption color="red" />
							<AccentOption color="orange" />
							<AccentOption color="yellow" />
							<AccentOption color="#00FF00" />
							<AccentOption color="#5ab7fa" />
							<AccentOption color="purple" />
						</Section>
						<Section title={strings.sections.textSize.title}>
							<span className={theme.textSecondary} style={{ fontSize: 12 }}>
								Does not work yet lol
							</span>
							<RadioSelection
								items={["Cozy", "Compact"]}
								default={0}
								updated={(value) => {
									switch (value) {
										case 0:
											settings.postTextSize = 30;
											break;
										case 1:
											settings.postTextSize = 20;
											break;
									}
									settings.update();
								}}
							/>
						</Section>
						<Section title={strings.sections.embeds.title}>
							<span className={theme.textSecondary} style={{ fontSize: 12 }}>
								{strings.sections.embeds.description}
							</span>
							<Checkbox
								items={[
									strings.sections.embeds.embedYouTube,
									strings.sections.embeds.embedTwitchStreams,
									strings.sections.embeds.embedTwitchLiveChat,
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
								className={`${theme.textInverted}`}
								style={{
									backgroundColor: settings.accentColor,
									borderRadius: 4,
									width: "100%",
									padding: 4,
									boxSizing: "border-box",
									border: "none",
									cursor: "pointer",
								}}
							>
								{strings.sections.activeSessions.signOutAll}
							</button>
						</Section>
					</Page>
					<Page self={PageType.Language} current={page}>
						<Section title={strings.sections.language.title}>
							<span className={theme.textSecondary} style={{ fontSize: 12 }}>
								{strings.sections.language.description}
							</span>
							<RadioSelection
								items={[strings.sections.language.english, strings.sections.language.retarded]}
								default={0}
								updated={(value) => {
									switch (value) {
										case 0:
											settings.language = "english";
											break;
										case 1:
											settings.language = "retarded";
											break;
									}
									settings.update();
								}}
							/>
						</Section>
					</Page>
				</div>
			</div>
		</ReactModal>
	);
}

export { SettingsPage, PageType as PageTypes };
