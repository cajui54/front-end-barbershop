import styled from "styled-components";

export const InfoData = styled.div`
    margin: 2rem auto;
    width: 99%;
    min-height: 13rem;
    border-radius: 5px;
    overflow: hidden;

    h2 {
        box-sizing: border-box;
        width: 95%;
        padding: 10px;
        color: #1e293b;
        font-size: 3.5rem;
    }
    @media screen and (min-width: 700px) {
        h2 {
            font-size: 2.5rem;
        }
    }
`

export const Card = styled.div`
    width: 100%;
    min-height: 15rem;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 700px) {
        flex-direction: row;
    }
    @media screen and (min-width: 1000px) {
        width: 60%;
        margin: 5px 0;
    }

`

export const CardInfo = styled.div`
        background-color: #020617;
        width: 90%;
        height: 14rem;
        border-radius: 5px;
        margin: .5rem auto;
        h6 {
            color: #fcd34d;
            text-align: center;
            font-size: 2rem;
            letter-spacing: .1rem;
            padding: 5px 0;
        }
        div {
            height: 70%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        svg {
            font-size: 6.5rem;
            color: #fcd34d;
            margin-left: 2rem;
        }
        @media screen and (min-width: 700px) {
            width: 48%;
        }
`
export const CardResults = styled.span`
    width: 80%;
    margin-left: 1.5rem;
    font-size: 1.9rem;
    p{
        color: #fcd34d;
        margin-top: .6rem;
    }
    span {
        margin-right: 1rem;
        color: #fff;
        font-size: 2.8rem;
    }
    .resultContainer {
        width: 70%;
        margin-left: 5rem;
    }  
    .resultContainer p {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .resultContainer p span:first-child {
        font-size: 5.5rem;
    }
    .resultContainer p span:last-child {
        font-size: 1.5rem;
        position: absolute;
        top: 5rem;
        right: .1rem;
        color: #fcd34d;
    }
    .bar {
        transform: scale(2.5);
        margin: 0 1.5rem;
    }
`