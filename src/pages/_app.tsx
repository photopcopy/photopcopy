import React from "react";
import "../styles/global.css"

function Wrapper({Component, pageProps}: {Component: ()=>React.ReactElement, pageProps: {}}){
    console.log(`Curious to see how this works?
Photopcopy runs on next.js (React), typescript.
It is open source at https://www.github.com/photopcopy
`)
    return <Component {...pageProps}/>
}
export default Wrapper;