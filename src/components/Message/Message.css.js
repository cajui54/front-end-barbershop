import styled from "styled-components";

export const Message = styled.div`
    width: 90%;
    div {
        width: 80%;
        margin: 20px auto;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        font-size: 1.4rem;
        
    }
    svg {
        color: #0f766e;
        margin-right: 10px;
        animation: svgAnimation 2s infinite ;
    }
    @keyframes svgAnimation {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
       
    }
    .MessageLoading {
        color: #020617;
    }
    .MessageError {
        background-color: #fecdd3;
        color: #be123c;
        border: 1px solid #be123c;
    }
    .MessageSuccess {
        background-color: #dcfce7;
        border: 1px solid #dcfce7;
        color: #166534;
    }
`