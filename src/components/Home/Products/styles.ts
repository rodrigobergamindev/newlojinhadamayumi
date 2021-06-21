import styled from 'styled-components';



export const Container = styled.section`

    display: grid;
    width: 100%;
    max-width: 1120px;
    height: 40vh;

    margin-top: 6rem;

    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 2rem;

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 2rem;

        height: 40vh;
        h4 {
            color: var(--primary);
        }

        h2 {
            font-weight: 400;
            font-size: 1.8rem;

            strong {
                color: var(--primary);
            }
        }

    }

`
