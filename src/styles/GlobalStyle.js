import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    
    html {
        height: 100%;
    }

    body {
        height: 100%;
        background: #67bc98;
    }

    main {
        position: relative;
    }
`;

export default GlobalStyle
