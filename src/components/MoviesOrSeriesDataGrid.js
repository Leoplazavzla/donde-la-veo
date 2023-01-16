import styled from "styled-components";

export const MoviesOrSeriesDataGrid = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 40px auto 100px auto;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    
    @media (max-width: 680px){
        grid-template-columns: 1fr;
        grid-template-rows: 0.4fr 0.4fr;
    }
    
    
`