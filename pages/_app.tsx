import Head from "next/head";
import React, { useEffect } from "react";
import "../styles/global.scss";

function Wrapper({ Component, pageProps }: { Component: () => React.ReactElement; pageProps: {} }) {
	useEffect(() => {
		console.log(
			`
%cPhotopcopy
%cStop trying to inspect element and look through source like you're some pro hacker or something.

This project is open source. https://github.com/photopcopy/photopcopy. Feel free to contribute! Thx <3 uwu
		`.trim(),
			"font-style: italic; font-size: 20px",
			"font-size: unset",
		);
	}, []);
	return (
		<>
			<Head>
				<link rel="manifest" href="./manifest.json" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default Wrapper;
