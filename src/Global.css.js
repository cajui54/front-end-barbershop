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
`

export default GlobalStyle;