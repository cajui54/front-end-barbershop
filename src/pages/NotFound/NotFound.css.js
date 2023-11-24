import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`
export const Title = styled.div`
    margin: 150px auto;
    width: 80%;
    text-align: center;
    svg {
        font-size: 5rem;
        color: #2dd4bf;
    }
    h2 {
        
        color: #5eead4;
        font-size: 3rem;
    }
    h3 {
        color: #64748b;
        font-size: 1.5rem;
        transform: scaleX(1.4);
    }
    button {
        background-color: #2dd4bf;
        color: #fff;
        font-weight: bold;
        margin-top: 20px;
        width: 200px;
        padding: 5px 0;
        border-radius: 10px;
        border: none;
        box-shadow: 2px 2px 5px #000;
        cursor: pointer;
    }
`