import React from "react";
import {Route, Routes} from "react-router-dom";
import paths from "./resources/paths";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import SeriesDetail from "./pages/SeriesDetail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={paths.home} element={<Home/>}/>
            <Route path={`${paths.movieDetail}/:movieId`} element={<MovieDetail/>}/>
            <Route path={`${paths.seriesDetail}/:seriesId`} element={<SeriesDetail/>}/>

        </Routes>

    )
}

export default AppRoutes;