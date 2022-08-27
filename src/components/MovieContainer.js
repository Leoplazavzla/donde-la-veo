import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: grey;
    border-radius: 3%;
    width: 200px;
    height: auto;

    .img{
        width 180px;
        height: 280px;
        border: 2px solid black;
    }
    
    .title{
        font-size: 24px
    }
    
    .year{
        font-size: 12px;
    }
    
    .stream{
        position: relative;
        margin: 10px 10px;
    }
    
    .stream img{
        position: absolute;
        width: 30px;
        z-index:1;
    }
`