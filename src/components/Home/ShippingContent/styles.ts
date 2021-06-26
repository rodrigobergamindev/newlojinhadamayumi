import styled from 'styled-components';


export const Container = styled.section`

@media only screen and (max-width: 900px) {

    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items:center;

    padding: 1rem;
}


    margin-top: 5rem;
    width: 100%;
    max-width: 1120px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 6rem;

    
    .card {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 250px;
        justify-content: space-around;
        padding: 0.75rem;
        
        border-radius: 2px;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background: var(--primary);
        transition: all 0.3s ease-in-out;


        span {
            color: var(--secondary);
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 1.4rem;
                font-weight: 600;

                color: var(--secondary);
            }
        }
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }

        img {
            width: 70px;
        }

        span {
     
            font-size: 0.80rem;
            font-weight: 400;
        }


        @media only screen and (max-width: 900px) {

            width: 100%;
            height: 12rem;
            justify-content: space-around;
            .subtitle {
            span {
                font-size: 1.1rem;
                font-weight: 600;

            }
            }
            img {
                width: 1.5rem;
            }

            &:hover {
                cursor: pointer;
                transform: none;
            }
}
    }
`
