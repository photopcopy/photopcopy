import React, { useEffect } from "react";
import "../styles/global.scss";

function Wrapper({ Component, pageProps }: { Component: () => React.ReactElement; pageProps: {} }) {
	return <Component {...pageProps} />;
}
export default Wrapper;
