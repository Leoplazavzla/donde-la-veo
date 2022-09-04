import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as SeriesAPI from "../Api/TMDBSeries"
import {MovieOrSeriesDetails} from "../components/MovieOrSeriesDetails";
import Select, {components} from "react-select";
import BackButton from "../components/buttons/BackButton";

const {Option} = components;

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
            {seriesDetails &&
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