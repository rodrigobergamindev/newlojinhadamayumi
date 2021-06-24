import styled from 'styled-components';


export const Container = styled.section`


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
        justify-content: space-between;
        padding: 0.75rem;
        
        border-radius: 2px;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background: var(--primary);
        transition: all 0.5s ease-in-out;

        span {
            color: var(--secondary);
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 1.5rem;
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
     
            font-size: 0.8rem;
            font-weight: 400;
        }
    }
`
