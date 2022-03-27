/**
 * Functional components served as templating
 * Passing into other functional properties according to the input url
 */
import React from "react";
import Navigator from "./layout/Navigator";

function Layout(props) {
    return (
        <>
            <Navigator {...props} renderPage={props.children} />
        </>
    )
}
export default Layout;
