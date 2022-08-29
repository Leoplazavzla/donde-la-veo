import React from "react";
import justwatch from "../images/justwatch.png"

export const Footer = () => {

    return(
        <div className={"footer"}>
            <div>Powered by <img src={justwatch} alt={"Just-watch"}/></div>
            <div>Thanks to <a href={"https://www.themoviedb.org/"} target={"_blank"} rel={"noreferrer"}>The Movie Data Base</a> </div>
        </div>
    )

}