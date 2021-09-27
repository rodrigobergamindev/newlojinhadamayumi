import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle `


@-webkit-keyframes bounceInDown {
            0% {
               opacity: 0;
               -webkit-transform: translateY(-2000px);
            }
            60% {
               opacity: 1;
               -webkit-transform: translateY(30px);
            }
            80% {
               -webkit-transform: translateY(-10px);
            }
            100% { 
               -webkit-transform: translateY(0);
            }
         }
         
         @keyframes bounceInDown {
            0% {
               opacity: 0;
               transform: translateY(-2000px);
            }
            60% {
               opacity: 1;
               transform: translateY(30px);
            }
            80% {
               transform: translateY(-10px);
            }
            100% {
               transform: translateY(0);
            }
         }

    :root {
        --primary: #ff3838;
        --secondary: #F0F2F5;
        --sub:#333;
    }
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background: var(--secondary);
        
        
    }
    html {
        -webkit-animation: bounceInDown 3s ease-in-out;
        -moz-animation: bounceInDown 3s ease-in-out;
        -o-animation: bounceInDown 3s ease-in-out;
        animation: bounceInDown 3s ease-in-out;
        
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
        
        
        border-radius: 50%;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease-out;
            transform: translateY(-10%);
        }

        @media only screen and (max-width: 900px) {
  
            
            bottom: 1.5rem;
            right: 1.5rem;
  }
    }

    .react-carousel {
        display: auto;
        @media only screen and (max-width: 900px) {
            display: none;
        }

    }

    .mobile {
        display: none;
        @media only screen and (max-width: 900px) {
            display: flex;
        }
    }


    .react-modal-overlay {
        background:rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right:0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content:center;
        z-index: 999999;


        @media only screen and (max-width: 900px) {
             align-items: center;
             justify-content:flex-start;
           
        }


    }

    .react-modal-content {
        width: 100%;
        max-width: 700px;
        background: var(--secondary);
        position: relative;
        border-radius: 0.24rem;
        padding: 3rem;
        z-index: 999999;

    }




`

export const DisplayPDF = styled.div`

   

    height: 100vh;
    width: 100%;

    iframe {
        width: 100%;
        height: 100%;
    }
    
`