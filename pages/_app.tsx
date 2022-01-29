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
			"font-style: italic; font-size: 30px",
			"font-size: unset",
		);
	}, []);
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
export default Wrapper;
