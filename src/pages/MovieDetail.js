import React, {useState} from "react";
import { MovieContainer } from "../components/MovieContainer";
import HBO from "../images/hbo.png"

const MovieDetail = () => {
    return(
        <>
        <h1>MovieDetail</h1>
        <MovieContainer>
            <div className="stream">
                <img src={HBO} alt={"hbo"}/>
                <div className="img">

                </div>
                <div className="title">
                    Movie Title
                </div>
                <div className="year">
                    1977
                </div>
            </div>

        </MovieContainer>
        </>
    )

}

export default MovieDetail;