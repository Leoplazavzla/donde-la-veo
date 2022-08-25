import React from "react";
import {Route, Routes} from "react-router-dom";
import paths from "./resources/paths";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={paths.home} element={<Home/>}/>
            <Route path={`${paths.movieDetail}/:movieName`} element={<MovieDetail/>}/>
        </Routes>

    )
}

export default AppRoutes;