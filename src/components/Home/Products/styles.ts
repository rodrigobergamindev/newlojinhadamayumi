import styled from 'styled-components';


export const Container = styled.section`

    display: grid;
    border: 1px solid var(--primary);
    width: 100%;
    max-width: 1120px;
    height: 30vh;

    margin-top: 6rem;


    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 2rem;

    margin-bottom: 10rem;

    .catalogs {
        width: 100%;
    }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;


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
