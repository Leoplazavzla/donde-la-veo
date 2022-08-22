import React from "react";
import {Route, Routes} from "react-router-dom";
import paths from "./resources/paths";

import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={paths.home} element={<Home/>}/>
        </Routes>

    )
}

export default AppRoutes;