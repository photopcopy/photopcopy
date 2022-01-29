import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentAddedResponse } from "../components/signalr";
import { Group, CommentId, Comment, PostId, Post, GroupId, UserId, User } from "../types/post";
import { GetPostsResult } from "./api";

const globalGroup = {
	id: "global",
	name: "Global",
	members: [],
	posts: [],
} as Group;

// todo: move users, comments, posts, etc to a new slice

// redux is so fucking weird and i dont even want to touch this
export const UISlice = createSlice({
	name: "ui slice",
	initialState: {
		sidebarOpen: false,
		users: {} as Record<UserId, User>,
		comments: {} as Record<CommentId, Comment>,
		posts: {} as Record<PostId, Post>,
		currentGroup: "global" as GroupId,
		groups: {
			global: globalGroup,
		} as Record<GroupId, Group>,
	},
	reducers: {
		onPostsAdded(
			state,
			{
				payload: { users, reset, comments, posts, group = "global" },
			}: PayloadAction<GetPostsResult & { reset?: true }>,
		) {
			state.users = { ...state.users, ...users };
			state.comments = { ...state.comments, ...comments };
			for (const p of posts) {
				state.posts[p.id] = p;
			}

			state.groups[group].posts = [...state.groups[group].posts, ...posts.map((p) => p.id)];

			return state;
		},

		onCommentAdded(state, { payload: { comment, user, post } }: PayloadAction<CommentAddedResponse>) {
			state.comments[comment.id] = comment;
			state.posts[post].comments = [...state.posts[post].comments, comment.id];
		},
		showSidebar(state) {
			state.sidebarOpen = true;
		},
		hideSidebar(state) {
			state.sidebarOpen = false;
		},
	},
});
