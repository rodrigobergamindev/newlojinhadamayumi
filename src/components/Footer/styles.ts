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

        .mapa{
            ul {
                list-style: none;

                li {
                    margin-top: 0.5rem;
                }
            }
        }

        .contatos{
            ul {
                list-style: none;

                li {
                    margin-top: 0.5rem;
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

            .titleLogo {
                display: flex;
                flex-direction: column;

                span {
                    margin-left: 1rem;
                }
            }
  
            img {
                max-width:90px;
            }

            h2 {
                margin-left: 1rem;
                font-size: 1.5rem;
            }
        }


        .description {
            padding: 1rem;
            font-weight: 400;
            p {
                line-height: 1.5rem;
            }
            }
        }

        
    

    
`