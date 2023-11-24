import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    
    h3 {
        width: 90%;
        font-size: 2rem;
        margin: 2rem auto;
    }
    @media screen and (min-width: 700px) {
        h3 {
            font-size: 3rem;
            text-align: center;
        }
    }
`
export const Subtitle = styled.h2`
    background-color: #020617;
    color: #fcd34d;
    width: 95%;
    margin: 0 auto;
    padding: 10px;
    font-size: 3rem;
    text-align: center;
    border-radius: 10px;

    @media screen and (min-width: 700px) {
        text-align: left;
    }
`
export  const ButtonNewTime = styled.div`
    width: 80%;
    margin: 10px auto;

    button {
        width: 90%;
        padding: 10px 5px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #fcd34d;
        color: #0f172a;
        border: 2px solid #0f172a;
        font-weight: bold;
        letter-spacing: 1.1px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button svg {
        margin-right: 5px;
        font-size: 2rem;
    }
    @media screen and (min-width: 700px){
        width: 250px;

        margin-left: 150px;
    }
`
export const GridList = styled.div`
    @media screen and (min-width: 700px){
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
    }
    
    @media screen and (min-width: 1000px){
        width: 90%;
        margin: 10px auto;
        grid-template-columns: repeat(3, 1fr);
    }
`

