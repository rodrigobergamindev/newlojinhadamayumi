import styled from 'styled-components';



export const Container = styled.section`

    display: grid;
    width: 100%;
    max-width: 1120px;
    margin-top: 5rem;
    margin-bottom: 5rem;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;


    @media only screen and (max-width: 900px) {
  
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas: 
        "item1"
        "item2"
        }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 2rem;
        height: 40vh;
        h4 {
            color: var(--primary);
            font-size: 2rem;
        }

        h2 {
            font-weight: 400;
            font-size: 1.8rem;

            strong {
                color: var(--primary);
            }
        }

        @media only screen and (max-width: 900px) {
            height: auto;
            padding: 1rem;
            grid-area:item1;
            justify-content:space-between;

            h4{
                margin-bottom: 1rem;
            }

            h2{
                margin-bottom: 1rem;
            }
        }

    }

`
