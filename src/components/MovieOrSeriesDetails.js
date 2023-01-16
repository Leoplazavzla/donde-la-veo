import styled from "styled-components";

export const MovieOrSeriesDetails = styled.div`
    max-width: 90%;
    margin: auto;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    background-color: #6d7380;
    border-radius: 5px;
    color: aliceblue;
    
    .poster{
        display: flex;
        justify-content: center;
        width: 28%;
    }
  
    .poster img{
        min-width: 20%;
        border-radius: 5px;
    }
    
    .wrapper{
        display: flex;
        flex-direction: row;
    }
    
    .details-wrapper{
        margin-left: 7px;
        display: flex;
        padding: 0px 30px;
        flex-direction: column;
    }
    
    .title{
        margin-bottom: 15px;
    }
    
    .title span{
        color: #F3B51D;
        font-weight: bold;
    }
    
    .overview{
        margin-bottom: 15px;
    }
    
    .watch-provider{
        color: black;
    }
    
    .stream-provider{
        width: 100%;
    }
    
    .stream-provider-img{
        display: flex;
        align-items: center;
    }
    
    .stream-provider-img img{
        width: 15%;
        border-radius: 50%;
        margin-left: 12px;
    }
    
    .countries{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        padding: 20px;
    }
    
    .select{
        min-width: 40%;
        color: black;
    }
    
    .no-streaming{
        margin-left: 100px;
    }
    
    @media (max-width: 680px){
        .wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .countries{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .select{
            width: 100%;
            margin-bottom: 20px;
            color: black;
        }
        
        .no-streaming{
            margin: auto;
        }
        
        .poster{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .stream-provider{
            display: flex;
            width: 100%;
            justify-items: center;
        }
        .stream-provider-img{
            align-items: center;
            
        }
        .stream-provider-img img{
            width: 30%;
            border-radius: 50%;
            margin-left: 12px;
        }
    }
    
    

`