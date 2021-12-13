interface Comment {
	id: string;
	author: string;
	content: string;
}

interface PostData {
	id: string;
	author: string;
	content: string;
	attachments: string[]; // in the form of url
	comments: Comment[];
	isLiked: boolean;
	likes: number;
}

export type { Comment, PostData };
