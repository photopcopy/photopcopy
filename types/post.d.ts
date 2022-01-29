type UserId = string;
type PostId = string;
type GroupId = string;
type CommentId = string;

interface Comment {
	id: CommentId;
	author: UserId;
	content: string;
	replyOf?: CommentId;
}
interface User {
	id: UserId;
	username: string;
	avatar: string;
}

interface Group {
	id: GroupId;
	name: string;
	posts: PostId[];
	members: UserId[];
}
interface Post {
	id: PostId;
	author: UserId;
	group: GroupId;
	content: string;
	attachments: string[]; // in the form of url
	comments: CommentId[];
	isLiked: boolean;
	likes: number;
}

export type { UserId, PostId, GroupId, CommentId, Comment, User, Post, Group };
