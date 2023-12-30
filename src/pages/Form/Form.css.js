import styled from 'styled-components';

export const FormContainer = styled.div`
    background-color: #e2e8f0;
    width: 100%;
    height: 100vh;

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 95%;
    min-height: 60rem;
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

    label div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
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
    .line-error-input {
        border-bottom: 2px solid #fecaca;
    }
    .error-message {
        background-color: #fee2e2;
        color: #ef4444;
        border: 1px solid #ef4444;
        text-align: center;
        font-size: 10px;
        position: relative;
        top: -10px;
        padding: 5px 0;
        width: 50%;
        margin: 5px auto;
        border-radius: 2px;
    }
    
`
export const SelectContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    label {
        width: 65%;
    }
    label div{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    p {
        position: absolute;
        top: 2px;
        left: 10px;
        font-size: .8rem;
        color: #fcd34d;
        letter-spacing: .2rem;
    }
    .error-message {
        width: 90%;
        position: relative;
        color: #f87171;
        text-align: center;
        top: -10px;
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
        padding: 5px 0;
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
