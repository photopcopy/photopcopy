import Head from "next/head";
import React from "react";

export default function error() {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<div>
				<img alt="404" style={{ display: "block" }} src="./assets/404.png" />I{"'"}ll always be there for you!
			</div>
		</>
	);
}
