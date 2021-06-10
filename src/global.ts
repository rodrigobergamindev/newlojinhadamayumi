import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle `


    :root {
        --primary: #ff3838;
        --secondary: #F0F2F5;
    }
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    html {
        
        @media(max-width:1080px) {
            font-size: 93.75%;
        }
        @media(max-width:720px) {
            font-size: 87.5%;
        }
    }
    button {
        cursor: pointer;
    }


    .iconFloat {
        position:fixed;
        bottom: 3rem;
        right: 3rem;

        width: 5rem;
        height: 5rem;
        filter: brightness(110%);
        background-color: var(--secondary);
        box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 2px 2px rgba(0,0,0,0.23);
        border-radius: 50%;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease-out;
            transform: translateY(-10%);
        }
    }
`