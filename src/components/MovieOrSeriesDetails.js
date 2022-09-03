import styled from "styled-components";

export const MovieOrSeriesDetails = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: column;
    background-color: grey;
    
    .image{
        width: 100%;
    }
  
    .image img{
        width: 100%;
    }
    
    .wrapper{
        display: flex;
        flex-direction: row;
    }
    
    .details-wrapper{
        margin-left: 7px;
        display: flex;
        flex-direction: column;
    }
    
    .watch-provider{
        color: black;
    }

`