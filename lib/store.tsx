import React, { ReactElement } from "react";
import { combineReducers, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { CreatePostPage } from "../components/createpostpage/createpostpage";
import { SettingsPage } from "../components/settingspage/settingspage";
import { SignInPage } from "../components/signinpage/signinpage";
import { languages } from "./localizationmanager";
import { UISlice } from "./uislice";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: { token: "test_user_token", userid: "test_user", username: "Test_User", signedIn: true },
	reducers: {
		signOut(state) {
			state.token = "";
			state.userid = "";
			state.signedIn = false;
			state.username = "";
			return state;
		},
		signIn(
			state,
			{
				payload: { username, userid, token },
			}: PayloadAction<{ username: string; userid: string; token: string }>,
		) {
			state.username = username;
			state.userid = userid;
			state.token = token;
			return state;
		},
	},
});

interface Popup {
	isOpen: boolean;
	renderer: (onRequestClose: () => void, isOpen: boolean, state: any) => ReactElement;
	state: any;
}

export const PopupSlice = createSlice({
	name: "popup slice",
	initialState: {
		CreatePostMenu: {
			isOpen: false,
			renderer: (onRequestClose, isOpen, state) => {
				return <CreatePostPage onRequestClose={onRequestClose} isOpen={isOpen} state={state} />;
			},
			state: {},
		},
		SettingsMenu: {
			isOpen: false,
			renderer: (onRequestClose, isOpen, state) => {
				return <SettingsPage onRequestClose={onRequestClose} isOpen={isOpen} state={state} />;
			},
			state: {},
		},
		SignInMenu: {
			isOpen: false,
			renderer: (onRequestClose, isOpen, state) => {
				return <SignInPage onRequestClose={onRequestClose} isOpen={isOpen} state={state}></SignInPage>;
			},
			state: {},
		},
	} as Record<string, Popup>,
	reducers: {
		openPopup(state, { payload: { name, state: popupState } }: PayloadAction<{ name: string; state?: {} }>) {
			state[name].isOpen = true;
			if (popupState) {
				state[name].state = popupState;
			}
			return state;
		},

		closePopup(state, { payload: name }: PayloadAction<string>) {
			state[name].isOpen = false;
		},
		addPopups(
			state,
			{
				payload: { key, renderer, isOpen, state: popupState },
			}: PayloadAction<{ key: string; isOpen: boolean; renderer: () => ReactElement; state: any }>,
		) {
			state[key] = {
				renderer,
				isOpen,
				state: popupState,
			};
			return state;
		},
	},
});

interface UserSettings {
	theme: "dark" | "light";
	language: keyof typeof languages;
	accentColor: string;
	postTextSize: number;
}

export const UserSettings = createSlice({
	name: "User Settings",
	initialState: {
		theme: "dark",
		language: "english",
		accentColor: "#5ab7fa",
		postTextSize: 20,
	} as UserSettings,
	reducers: {
		updateSettings: (state, { payload: settings }: PayloadAction<Partial<UserSettings>>) => {
			state = { ...state, ...settings };
			return state;
		},
	},
});

export const AppStore = createStore(
	combineReducers({
		settings: UserSettings.reducer,
		user: UserSlice.reducer,
		ui: UISlice.reducer,
		popups: PopupSlice.reducer,
	}),
);

const { showSidebar, hideSidebar, onPostsAdded, onCommentAdded } = UISlice.actions;
const { openPopup, closePopup, addPopups } = PopupSlice.actions;
const { signIn, signOut } = UserSlice.actions;
const { updateSettings } = UserSettings.actions;

export const settingsSelector = (state: RootState) => state.settings;

export {
	showSidebar,
	hideSidebar,
	onPostsAdded,
	openPopup,
	closePopup,
	addPopups,
	signIn,
	signOut,
	updateSettings,
	onCommentAdded,
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof AppStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof AppStore.dispatch;
