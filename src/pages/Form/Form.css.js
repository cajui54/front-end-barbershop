import styled from 'styled-components';

export const FormContainer = styled.div`
    background-color: #e2e8f0;
    width: 100%;
    height: 100vh;

    .btnCloseForm {
        background-color: #dc2626;
        color: #fff;
        margin: 20px;
        border: none;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
        transition: all .5s ease-in-out;
        text-align: center;
        box-shadow:  0 0 5px #000;
    }
    .btnCloseForm:hover {
        transform: scale(1.2);
    }
    .btnCloseForm svg {
        font-size: 1.5rem;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 95%;
    min-height: 50rem;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 2px -5px 5px #94a3b8;

    @media screen and (min-width: 550px){
        width: 80%;
    }
    @media screen and (min-width: 700px){
        width: 350px;
    }
`
export const LogoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    min-height: 10rem;
    margin-top: 50px;
    
    svg {
        color: #0f172a;
        font-size: 10rem;
    }

    h2 {
        color: #0f172a;
        font-size: 3rem;
        transform: translateY(-20px);
    }
    h3 {
        color: #94a3b8;
        font-size: 2rem;
        transform: translateY(-28px);
    }

`
export const InputContainer = styled.div`
    padding: 20px;
    box-sizing: border-box;
    width: 95%;

    label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
    }
    p {
        margin-right: 10px;
        color: #0f172a;
        font-size: 1.5rem;
        font-weight: bold;
    }
    input {
        width: 150px;
        padding: 5px;
        border: none;
        border-bottom: 2px solid #0f172a;
        outline: none;
        font-size: 1.9rem;
        font-weight: bold;
        letter-spacing: 1.1px;
        color: #020617;
    }
    input:focus {
        border-width: 3px;
        background-color: #e2e8f0;
        border-radius: 2px;
    }

`
export const SelectContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    label {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 45%;
    }
    p {
        position: absolute;
        top: 2px;
        left: 10px;
        font-size: .8rem;
        color: #fcd34d;
        letter-spacing: .2rem;
    }
    select {
        width: 100%;
        background-color: #0f172a;
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
    }
    option {
        text-align: center;
        
    }
`
export const ResultsContainer = styled.div`
    background-color: #e2e8f0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin-top: 20px;
    letter-spacing: 1.2px;
    overflow: hidden;
    p:first-child {
        background-color: #0f172a;
        color: #fff;
        width: 150px;
        padding: 10px 0;
        padding-left: 5px;
        border-radius: 10px;
        text-align: center;
    }

    p:last-child {
        color: #10b981;
        font-size: 2rem;
    }
`

export const ButtonsContainer = styled.div`
    min-width: 60%;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    button  {
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        letter-spacing: 1.1px;
    }
    svg {
        margin-right: 5px;
        font-size: 1.5rem;
    }
    button:first-child {
        background-color: #1e293b;
        color: #fcd34d;
    }
    button:last-child {
        background-color: #fcd34d;
        color: #1e293b;
    }
`
