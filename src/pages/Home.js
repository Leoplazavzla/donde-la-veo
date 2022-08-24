import React, {useState} from "react";
import {SearchBar} from "../components/SearchBar";
import {SearchButton} from "../components/SearchButton";
import {SearchContainer} from "../components/SearchContainer";
import {MovieListDropdown} from "../components/MovieListDropdown";
import {MovieListDropdownRow} from "../components/MovieListDropdownRow";
import {SearchInner} from "../components/SearchInner";

//Data
let data = require("../movies.json");

const Home = () => {

    const [searchValue, setSearchValue] = useState("");
    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    const onSearch = (searchTerm) => {
        setSearchValue(searchTerm)
    }
    return (
        <>
            <h1>Search your movie / series</h1>
            <SearchContainer>
                <SearchInner>
                    <SearchBar value={searchValue} onChange={handleSearchInputChange}/>
                    <SearchButton type={"submit"} onClick={() => onSearch(searchValue)}>Search</SearchButton>
                </SearchInner>
                <MovieListDropdown>
                    {data.filter((item) => {
                        const searchKeyword = searchValue.toLocaleLowerCase();
                        const fullName = item.movieName.toLowerCase()

                        return (
                            searchKeyword &&
                            fullName.startsWith(searchKeyword) &&
                            fullName !== searchKeyword
                        )
                    }).slice(0, 5)
                        .map((item) => (
                            <MovieListDropdownRow
                                key={item.movieName}
                                onClick={() => onSearch(item.movieName)}
                            >
                                {item.movieName}
                            </MovieListDropdownRow>
                        ))}
                </MovieListDropdown>
            </SearchContainer>
        </>

    )
}

export default Home;