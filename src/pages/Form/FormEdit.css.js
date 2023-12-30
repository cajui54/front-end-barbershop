import styled from "styled-components";

export const FormMain = styled.div`
    width: 100%;
    height: 100vh;
`

export const Form = styled.form`
    width: 90%;
    margin: 5rem auto;
    min-height: 40rem;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 0 3px #57534e;

    @media screen and (min-width: 500px){
        width: 30rem;
    }
`


export const Fieldset = styled.div`
    width: 80%;
    min-height: 300px;
    margin: 10px auto;
    
    legend {
        color: #fb923c;
        font-weight: bold;
        font-size: 2.5rem;
        margin: 15px 0;
    }

`

export const InputTextContainer = styled.div`
    padding: 5px;
    margin-bottom:  10px;
    display: flex;
    flex-direction: column;
    label {
        position: relative;
        padding: 10px;
    }
    svg {
        color: #f59e0b;
        font-size: 2rem;
        position: absolute;
        top: 1.2rem;
        left: 1.5rem;
    }
    input {
        padding: 5px;
        padding-left: 30px;
        border: 1px solid #fed7aa;
        border-radius: 10px;
        outline: none;
        color: #fb923c;
        font-weight: bold;
        background-color: #fff7ed;
    }
    input:focus {
        border: 2px solid #fdba74;
        box-shadow: 0 0 3px #fdba74;
        background-color: #ffedd5;
    }
    p {
        color: #f87171;
        margin-left: 2rem;
    }

`

export const InputSelectContainet = styled.div`
    padding: 5px;
    margin-bottom:  10px;
    display: flex;
    flex-direction: column;
    label {
        position: relative;
        padding: 5px;
    }
    svg {
        color: #f59e0b;
        font-size: 1.5rem;
        position: absolute;
        top: 1.2rem;
        left: 1.5rem;
    }
    select {
        width: 80%;
        padding: 5px 1px;
        padding-left: 20px;
        border-radius: 10px;
        border: 1px solid #fed7aa;
        outline: none;
        color: #fb923c;
        background-color: #fff7ed;
        text-align: center;
    }
    option {
        padding: 10px 0;
    }
    p {
        color: #f87171;
        margin-left: 2rem;
    }

`

export const OutputContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: -60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e7e5e4;
    border-radius: 10px;
    padding-right: 5px;

    p:first-child {
        color: #fff;
        background-color: #f59e0b;
        padding: 10px;
        border-radius: 10px;
    }
    p:last-child {
        color: #f59e0b;
        font-size: 1.5rem;
        padding: 10px;
    }
    @media screen and (min-width: 500px){
        p:first-child {
            font-size: 1.5rem;
        }
    }
`

export const ButtonsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        padding: 5px 10px;
        width: 100px;
        cursor: pointer;
        border-radius: 5px;
    }
    button svg {
        margin-right: .5rem;
    }
    button:first-child {
        background-color: #fed7aa;
        color: #fb923c;
        border: 1px solid #fb923c;
    }
    button:last-child {
        background-color: #44403c;
        color: #f5f5f4;
        border: 1px solid #44403c;
    }
 
`