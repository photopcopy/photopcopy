export const dev = process.env.NODE_ENV === "development";

const devUsers = [];

export async function AddConnection() {}

export async function GetUser(options: { token: string }) {}

export async function CreateUser(options: {}) {}

export async function CreatePost(options: { user: string; content: string; attachments: string[] }) {
	if (dev) {
		devUsers.push();
	} else {
	}
}

export async function UpdateUserSettings() {}

export async function CreateComment(options: { user: string; post: string; content: string }) {}
