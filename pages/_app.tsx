import React, { useEffect } from "react";
import "../styles/global.css";

function Wrapper({ Component, pageProps }: { Component: () => React.ReactElement; pageProps: {} }) {
	return <Component {...pageProps} />;
}
export default Wrapper;
