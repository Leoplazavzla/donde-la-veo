import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as SeriesAPI from "../Api/TMDBSeries"
import {MovieOrSeriesDetails} from "../components/MovieOrSeriesDetails";
import Select from "react-select";

const MovieDetail = () => {
    const seriesId = useParams()
    const [seriesDetails, setSeriesDetails] = useState({});
    const [seriesProvider, setSeriesProvider] = useState([]);
    const [countrySelected, setCountrySelected] = useState('');
    const [streamData, setStreamData] = useState({});

    useEffect(() => {
        SeriesAPI.getSeries(seriesId.seriesId)
            .then((response) => {
                setSeriesDetails(response)
            })


    }, [])

    useEffect(() => {
        SeriesAPI.getSeriesWatchProviders(seriesId.seriesId)
            .then((response) => {
                setSeriesProvider(Object.keys(response.results))
                setStreamData(response.results)
            })

    }, [])

    const findWatchProviderByCountry = (value) => {
        setCountrySelected(value.value)
    }

    return (
    seriesDetails &&
    <MovieOrSeriesDetails>
        <div className={"wrapper"}>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/original/${seriesDetails.poster_path}`}
                     alt={seriesDetails.original_name}/>
            </div>
            <div className={"details-wrapper"}>
                <div className={"title"}>
                    <h1>{seriesDetails.original_name}</h1>
                    <span>{seriesDetails.first_air_date}</span>
                </div>
                <div className={"overview"}>
                    <div>{seriesDetails.overview}</div>
                </div>
                <div className={"countries"}>
                    {seriesProvider &&
                        <div className={"select"}>
                            <Select
                                deafultValue={countrySelected}
                                onChange={findWatchProviderByCountry}
                                options={seriesProvider.map(item => ({label: item, value: item}))}
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
                                <>No streaming service available</>
                            }
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
        </MovieOrSeriesDetails>
    )

}

export default MovieDetail;