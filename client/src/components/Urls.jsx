/**
 * Functional Components to handle page 2 page routing
 */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" caseSensitive={false} element={<Home {...props} />}></Route>
                    <Route exact path="/login/" caseSensitive={false} element={<Login {...props} />}></Route>
                    <Route exact path="/SignUp/" caseSensitive={false} element={<SignUp {...props} />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Urls;