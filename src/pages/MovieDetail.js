import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as MovieAPI from "../Api/TMDB"
import {MovieOrSeriesDetails} from "../components/MovieOrSeriesDetails";

const MovieDetail = () => {
    const movieId = useParams()
    const [movieDetails, setMovieDetails] = useState({});
    const [streamProvider, setStreamProvider] = useState([]);

    useEffect(() => {
        MovieAPI.getStreamService(movieId.movieId)
            .then((response) => {
                setStreamProvider(response.results)

            })

    }, [])

    useEffect(() => {
        MovieAPI.getMovie(movieId.movieId)
            .then((response) => {
                setMovieDetails(response)
            }).then(() => {

        })


    },[])

    return(
        movieDetails &&
        <MovieOrSeriesDetails>
            <div className={"wrapper"}>
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.original_title}/>
            </div>
            <div className={"details-wrapper"}>
                <h1>{movieDetails.original_title}</h1>
                <div>{movieDetails.overview}</div>
                <div>{movieDetails.original_title}</div>
                {streamProvider.AR &&
                <div>
                    <span>You can watch it on</span>
                    <img src={`https://image.tmdb.org/t/p/original${streamProvider.AR.flatrate[0].logo_path}`} alt={`${streamProvider.AR.flatrate[0].provider_name}`}/>
                </div>
                }
            </div>

            </div>



        </MovieOrSeriesDetails>
    )

}

export default MovieDetail;