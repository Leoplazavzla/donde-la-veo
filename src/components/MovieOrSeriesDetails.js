import styled from "styled-components";

export const MovieOrSeriesDetails = styled.div`
    max-width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: lightGrey;
    
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
    
    .stream-provider-img{
        width: 40%
    }
    
    .stream-provider-img img{
    width: 20%
    }

`