import React, {useState} from "react";
import {SearchBar} from "../components/SearchBar";
import {SearchButton} from "../components/SearchButton";
import {SearchContainer} from "../components/SearchContainer";
import {MovieListDropdown} from "../components/MovieListDropdown";

//Data
let data = require("../movies.json");

const Home = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    const onSearch = (searchTerm) => {
        console.log("The search is: ", searchTerm)
    }


    return(
        <>
            <h1>Search your movie / series</h1>
            <SearchContainer>
                <SearchBar defaultValue={searchValue} onChange={handleSearchInputChange}/>
                <SearchButton type={"submit"} onClick={() => onSearch(searchValue)} >Search</SearchButton>
                <MovieListDropdown/>
            </SearchContainer>
        </>

    )
}

export default Home;