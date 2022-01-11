import React, { createContext, ReactElement } from "react";
import { combineReducers, configureStore, createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { CreatePostPage } from "../components/createpostpage/createpostpage";
import { SettingsPage } from "../components/settingspage/settingspage";

interface State {
	sidebarOpen: boolean;
	token: string;
	username: string;
	userid: string;
	signedIn: boolean;
}

const defaultState: State = {
	token: "test_user_token",
	userid: "test_user",
	username: "Test_User",
	signedIn: true,
	sidebarOpen: false,
};

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

export const UISlice = createSlice({
	name: "ui slice",
	initialState: { sidebarOpen: false },
	reducers: {
		showSidebar(state) {
			state.sidebarOpen = true;
			return state;
		},
		hideSidebar(state) {
			state.sidebarOpen = false;
			return state;
		},
	},
});

interface Popup {
	isOpen: boolean;
	renderer: (onRequestClose: () => void, isOpen: boolean) => ReactElement;
}

export const PopupSlice = createSlice({
	name: "popup slice",
	initialState: {
		CreatePostMenu: {
			isOpen: false,
			renderer: (onRequestClose, isOpen) => {
				return <CreatePostPage onRequestClose={onRequestClose} isOpen={isOpen} />;
			},
		},
		SettingsMenu: {
			isOpen: false,
			renderer: (onRequestClose, isOpen) => {
				return <SettingsPage onRequestClose={onRequestClose} isOpen={isOpen} />;
			},
		},
	} as Record<string, Popup>,
	reducers: {
		openPopup(state, { payload: name }: PayloadAction<string>) {
			state[name].isOpen = true;
			return state;
		},
		closePopup(state, { payload: name }: PayloadAction<string>) {
			state[name].isOpen = false;
		},
		addPopups(
			state,
			{
				payload: { key, renderer, isOpen },
			}: PayloadAction<{ key: string; isOpen: boolean; renderer: () => ReactElement }>,
		) {
			state[key] = {
				renderer,
				isOpen,
			};
			return state;
		},
	},
});

export const AppStore = createStore(
	combineReducers({ user: UserSlice.reducer, ui: UISlice.reducer, popups: PopupSlice.reducer }),
);
export const { showSidebar, hideSidebar } = UISlice.actions;
export const { openPopup, closePopup, addPopups } = PopupSlice.actions;
export const { signIn, signOut } = UserSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof AppStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof AppStore.dispatch;
