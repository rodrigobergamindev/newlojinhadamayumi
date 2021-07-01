import styled from 'styled-components';




export const StyledFooter = styled.footer`


    
        width:100%;
        max-width: 1120px;
        width:100%;
        display: flex;

        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem;
        margin-top: 4rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: 3rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 900px) {
                flex-direction: column;
       
            }

        .mapa{
            ul {
                list-style: none;

                li {
                    transition: all 0.3s ease-in-out;
                    margin-top: 0.5rem;

                    &:hover {
                    color: var(--primary);
                }
                }

            }
        }

        .contatos{
            @media only screen and (max-width: 900px) {
                    margin-bottom: 2rem;
                
       
            }
            ul {
                list-style: none;

                li {
                    margin-top: 0.5rem;
                    display: flex;
                    align-items: center;
                
                    img {
                        margin-right: 0.3rem;
                        max-width:20px;
                    }
                }
            }
        }

        .containerLogo {
            
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .logo {
            display: flex;
            align-items: center;
            cursor: pointer;


            @media only screen and (max-width: 900px) {
                    margin-bottom: 2rem;
                
       
            }

            .titleLogo {
                display: flex;
                flex-direction: column;

                span {
                    margin-left: 1rem;
                }
            }
  
            img {
                max-width:90px;

                @media only screen and (max-width: 900px) {
                    max-width:50px;
                
       
            }
            }

            h2 {
                margin-left: 1rem;
                font-size: 1.5rem;
            }
        }


        .description {
            margin-top: 1rem;
            padding: 1rem;
            font-weight: 400;

            @media only screen and (max-width: 900px) {
                padding:0;
                margin-bottom: 2rem;
                
       
            }
            h4 {
                margin-bottom: 0.5rem;
            }
            p {
                line-height: 1.5rem;
            }
            }
        }

        
    

    
`