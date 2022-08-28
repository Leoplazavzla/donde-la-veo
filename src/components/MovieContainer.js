import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: grey;
    border-radius: 3%;
    width: 100%;
    height: auto;
    text-align: center;
    
    a{
        text-decoration: none;
        color: #fff;
    }

    .img img{
        width 100%;
    }
    
    .title{
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .year{
        font-size: 12px;
        margin-bottom: 20px;
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