import styled from 'styled-components';


export const Container = styled.div`

        width: 100%;

        height: 40vh;
        display: flex;
        justify-content:center;

        background-image: url("/img/backgroundTest.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .catalogContainer {
            width: 100%;
            max-width: 1120px;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            gap: 10rem;


            .description {
                display: flex;
                flex-direction: column;
                padding: 2rem;

                color: var(--secondary);


                h2 {
                    font-weight: 400;
                    strong {
                        font-weight: 600;
                    }
                    margin-bottom: 1rem;
                }
                }
        
        button {
            background: var(--primary);
            outline: 0;
            border: 0;
            
            width: 100%;
            max-width: 150px;

            display: flex;
            justify-content:center;
            padding: 1rem;
            border-radius: 2px;

            color: var(--secondary);
            transition: 0.3s ease-in-out;

            &:hover{
                transition: 0.3s ease-in-out;
                filter: brightness(110%);
            }

        }
        }
`