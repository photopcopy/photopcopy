import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * UNFINISHED
 * 
 * Desc: Create a comment on a specific post
 * Method: POST
 * Body:
 *   auth: token(string);
 *   content: string;
 *   postid: id(string);
 * Response:
 *   commentid: id(string);
 */

interface Response {
	
}


export default function(req: NextApiRequest, res: NextApiResponse) {
	if (req.method!="POST") { res.status(405); return}
	const {auth, content, postid} = req.body;
	if ((process.env.NODE_ENV==="development"||typeof auth === "string") && typeof content === "string" && typeof postid === "string") {

	} else {
		res.status(400);
	}
}