import React from "react";
import justwatch from "../images/justwatch.png"

export const Footer = () => {

    return(
        <>
        <div className={"footer"}>
            <div>Powered by <img src={justwatch} alt={"Just-watch"}/></div>
            <div>Thanks to The Movie Data Base </div>
        </div>
        </>
    )

}