import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as MovieAPI from "../Api/TMDB"
import {MovieOrSeriesDetails} from "../components/MovieOrSeriesDetails";

const MovieDetail = () => {
    const movieId = useParams()
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        MovieAPI.getMovie(movieId.movieId)
            .then((response) => {
                setMovieDetails(response)
            })


    },[])

    return(
        movieDetails &&
        <MovieOrSeriesDetails>
            <h1>{movieDetails.original_title}</h1>
            <div className={"image"}>
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.original_title}/>
            </div>
            <div>{movieDetails.overview}</div>
            <div>{movieDetails.original_title}</div>



        </MovieOrSeriesDetails>
    )

}

export default MovieDetail;