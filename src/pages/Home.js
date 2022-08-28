import React, {useEffect, useState} from "react";
import {SearchBar} from "../components/SearchBar";
import {SearchContainer} from "../components/SearchContainer";
import {SearchInner} from "../components/SearchInner";
import * as MovieApi from "../Api/TMDB"
import {MovieContainer} from "../components/MovieContainer";
import {MoviesOrSeriesDataGrid} from "../components/MoviesOrSeriesDataGrid";
import {Link} from "react-router-dom";
import paths from "../resources/paths";

const Home = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState([])

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        if(searchValue !== ''){
            setTimeout(() => {
                MovieApi.searchMoviesOrSeries(encodeURI(searchValue))
                    .then((response) => {
                        setSearchedData(response.results)
                    })


            }, 2000)

        }
    },[searchValue])

    return (
        <>
            <h1>Search your movie / series</h1>
            <SearchContainer>
                <SearchInner>
                    <SearchBar value={searchValue} onChange={handleSearchInputChange} placeholder={searchValue}/>
                </SearchInner>
            </SearchContainer>
            <MoviesOrSeriesDataGrid>
                {searchedData.map((item) => (
                    item.poster_path&&
                    <MovieContainer key={item.media_type+item.id}>
                        <Link to={`/${item.media_type}/${item.id}`}>
                        <div className="img">
                            <img src={`https://image.tmdb.org/t/p/w500/.${item.poster_path}`} alt={item.title}/>
                        </div>
                            {item.media_type === 'movie' ?
                                <div>
                                    <div className="title">
                                          {item.title}
                                    </div>
                                    <div className="year">
                                        {item.release_date}
                                    </div>

                                </div>
                            :
                                <div>
                                    <div className="title">
                                         {item.original_name}
                                    </div>
                                    <div className="year">
                                        {item.first_air_date}
                                    </div>
                                </div>
                                    }


                        </Link>
                    </MovieContainer>
                ))}
            </MoviesOrSeriesDataGrid>
        </>

    )
}

export default Home;