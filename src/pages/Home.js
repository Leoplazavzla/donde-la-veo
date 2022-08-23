import React, {useState} from "react";
import {SearchBar} from "../components/SearchBar";
import {SearchButton} from "../components/SearchButton";
import {SearchContainer} from "../components/SearchContainer";

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
            <h1>Search your movie / series </h1>
            <SearchContainer>
                <SearchBar defaultValue={searchValue} onChange={handleSearchInputChange}/>
                <SearchButton type={"submit"} onClick={() => onSearch(searchValue)} >Search</SearchButton>
            </SearchContainer>
        </>

    )
}

export default Home;