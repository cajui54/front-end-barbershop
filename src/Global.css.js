import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f1f5f9;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    //yellow #fcd34d
    .btnClose {
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
    .btnDisable {
        background-color: red;
    }
`

export default GlobalStyle;