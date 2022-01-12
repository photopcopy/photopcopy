interface Comment {
	id: string;
	author: User;
	content: string;
}

interface User {
	id: string;
	username: string;
	avatar: string;
}
interface PostData {
	id: string;
	author: User;
	content: string;
	attachments: string[]; // in the form of url
	comments: Comment[];
	isLiked: boolean;
	likes: number;
}

export type { Comment, User, PostData };
