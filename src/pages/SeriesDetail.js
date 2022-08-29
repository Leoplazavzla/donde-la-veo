import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as SeriesAPI from "../Api/TMDBSeries"
import {MovieOrSeriesDetails} from "../components/MovieOrSeriesDetails";

const MovieDetail = () => {
    const seriesId = useParams()
    const [seriesDetails, setSeriesDetails] = useState({});

    useEffect(() => {
        SeriesAPI.getSeries(seriesId.seriesId)
            .then((response) => {
                setSeriesDetails(response)
            })


    },[])

    return(
        seriesDetails &&
        <MovieOrSeriesDetails>
            <h1>{seriesDetails.name}</h1>
            <div className={"image"}>
                <img src={`https://image.tmdb.org/t/p/w500/${seriesDetails.poster_path}`} alt={seriesDetails.name}/>
            </div>
            <div>{seriesDetails.overview}</div>
            <div>{seriesDetails.name}</div>



        </MovieOrSeriesDetails>
    )

}

export default MovieDetail;