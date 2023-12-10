import styled from "styled-components";

export const ListClient = styled.div`
    width: 95%;
    margin: 30px auto;
    
    @media screen and (min-width: 700px) {
        margin-left: 30px;
    }
 
`
export const ListDT = styled.dt `
       background-color: #020617;
        border-radius: 10px;
        padding: 7px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
            color: #fcd34d;
            font-size: 2rem;
            margin-left: 10px;
        }
        div {
            min-width: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        button {
            margin: 0 5px;
            padding: 2px 5px;
            border-radius: 5px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: all .5s ease-in-out;
        }
        button svg {
            margin-right: 5px;
            font-size: 1.8rem;
            
        }
        button:first-child{
            background-color: #eab308;
            color: #fff;
        }
        button:first-child:hover{
            background-color: #d97706;
        }
        button:last-child{
            background-color: #b91c1c;
            color: #fff;
        }
        button:last-child:hover{
            background-color: #7f1d1d;
        }
`

export const ListDD = styled.dd`
    box-shadow: 0 0 5px #525252;
    width: 97%;
    margin-left: 5px;
    min-height: 8rem;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;

    p {
        background-color: #d1d5db;
        margin: 5px 0;
        padding: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .lable {
        color: #000;
        font-weight: bold;
        font-size: 1rem;
    }
    .output {
        font-size: 1.3rem;
        color: #020617;
        font-weight: bold;
        margin-right: 10px;
    }
`