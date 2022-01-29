import { HubConnectionBuilder } from "@microsoft/signalr";
import { useDispatch } from "react-redux";
import { API_URLS } from "../lib/constants";
import { onCommentAdded } from "../lib/store";
import { PostId, Comment, User, UserId } from "../types/post";

export interface CommentAddedResponse {
	comment: Comment;
	user: User;
	post: PostId;
}

export function SignalR() {
	const dispatch = useDispatch();
	// prevent next.js from trying to create a hubconnection during ssr.
	if (process.env.NODE_ENV === "production") {
		if (typeof window === "undefined") {
		} else {
			const connection = new HubConnectionBuilder().withUrl(API_URLS.EventsHub).build();

			connection.on("ChatAdded", (data: CommentAddedResponse) => {
				dispatch(onCommentAdded(data));
			});
			connection.start(); //.then(() => connection.invoke("send", "Hello"));
		}
	}
	return <></>;
}
