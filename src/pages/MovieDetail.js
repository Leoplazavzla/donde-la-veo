import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as MovieAPI from "../Api/TMDB"
import {MovieOrSeriesDetails} from "../components/MovieOrSeriesDetails";
import Select, {components} from "react-select";
import BackButton from "../components/buttons/BackButton";

const MovieDetail = () => {
    const movieId = useParams()
    const fullArray = [];
    const [movieDetails, setMovieDetails] = useState({});
    const [streamProvider, setStreamProvider] = useState([]);
    const [countrySelected, setCountrySelected] = useState('');
    const [optionsArray, setOptionsArray] = useState([]);
    const [streamData, setStreamData] = useState([]);

    const {Option} = components;

    useEffect(() => {
        MovieAPI.getMovie(movieId.movieId)
            .then((response) => {
                setMovieDetails(response)
            }).then(() => {
        })
    }, [])

    useEffect(() => {
        MovieAPI.getStreamService(movieId.movieId)
            .then(async (response) => {
                await setStreamData(response.results)
                setStreamProvider(Object.keys(response.results)
                )
            })
    }, [])

    useEffect(() => {
        getCountries()
    }, [streamProvider])

    const getCountries = () => {
        streamProvider.forEach((item) => {
            let arrayObject = {
                value: item, label: item
            }
            fullArray.push(arrayObject)
            setOptionsArray(fullArray)
        })
    }

    const findWatchProviderByCountry = (value) => {
        setCountrySelected(value.value)

        getCountries()
    }

    const IconOption = props => (
        <Option {...props}>
            <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${props.data.value}.svg`}
                style={{width: 36, marginRight: 12}}
                alt={props.data.value}
            />
            {props.data.value}
        </Option>
    );

    return (
        <>
            <div className={"back-button"}>
                <BackButton/>
            </div>
            {movieDetails &&
                <MovieOrSeriesDetails>
                    <div className={"wrapper"}>
                        <div className="poster">
                            <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
                                 alt={movieDetails.original_title}/>
                        </div>
                        <div className={"details-wrapper"}>
                            <div className={"title"}>
                                <h1>{movieDetails.original_title}</h1>
                                <span>{movieDetails.release_date}</span>
                            </div>
                            <div className={"overview"}>
                                <div>{movieDetails.overview}</div>
                            </div>
                            <div className={"countries"}>
                                {streamProvider &&
                                    <div className={"select"}>
                                        <Select
                                            //defaultValue={countrySelected}
                                            onChange={findWatchProviderByCountry}
                                            options={optionsArray}
                                            components={{Option: IconOption}}
                                            placeholder={"Please select your country"}
                                        />
                                    </div>
                                }
                                {countrySelected.length > 0 ?
                                    <div className={"stream-provider"}>
                                        {streamData[countrySelected].hasOwnProperty('flatrate') ?
                                            <div className={"stream-provider-img"}>
                                                <span>You can watch it on</span>
                                                <img
                                                    src={`https://image.tmdb.org/t/p/original${streamData[countrySelected].flatrate[0].logo_path}`}/>
                                            </div>
                                            :
                                            <span className={"no-streaming"}>No streaming service available</span>
                                        }
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </MovieOrSeriesDetails>
            }
        </>
    )
}

export default MovieDetail;
