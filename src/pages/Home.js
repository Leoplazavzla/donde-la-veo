import React, {useEffect, useState} from "react";
import {SearchBar} from "../components/SearchBar";
import {SearchButton} from "../components/SearchButton";
import {SearchContainer} from "../components/SearchContainer";
import {MovieListDropdown} from "../components/MovieListDropdown";
import {MovieListDropdownRow} from "../components/MovieListDropdownRow";
import {SearchInner} from "../components/SearchInner";
import * as MovieApi from "../Api/TMDB"
import HBO from "../images/hbo.png";
import {MovieContainer} from "../components/MovieContainer";
import {MoviesOrSeriesDataGrid} from "../components/MoviesOrSeriesDataGrid";

//Data
let data = require("../movies.json");

const Home = () => {

    const [searchValue, setSearchValue] = useState("star wars");
    const [searchedData, setSearchedData] = useState([])

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        MovieApi.searchMoviesOrSeries(encodeURI(searchValue))
            .then((response) => setSearchedData(response.results))
    },[searchValue])


    const onSearch = (searchTerm) => {
        setSearchValue(searchTerm)
    }

    return (
        <>
            <h1>Search your movie / series</h1>
            <SearchContainer>
                <SearchInner>
                    <SearchBar value={searchValue} onChange={handleSearchInputChange} placeholder={searchValue}/>
                    <SearchButton type={"submit"} onClick={() => onSearch(searchValue)}>Search</SearchButton>
                </SearchInner>
            </SearchContainer>
            <MoviesOrSeriesDataGrid>
                {searchedData.map((item) => (

                    <MovieContainer key={item.id}>
                        <div className="img">
                            <img src={`https://image.tmdb.org/t/p/w500/.${item.poster_path}`} alt={item.title}/>
                        </div>
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="year">
                            {item.release_date}
                        </div>

                    </MovieContainer>

                ))}
            </MoviesOrSeriesDataGrid>
        </>

    )
}

export default Home;