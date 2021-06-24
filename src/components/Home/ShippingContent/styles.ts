import styled from 'styled-components';


export const Container = styled.section`


    margin-top: 8rem;
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
        height: 150px;
        justify-content: space-between;
        padding: 0.75rem;
        
        border-radius: 2px;
        border: 1px solid transparent;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: all 0.5s ease-in-out(.25,.8,.25,1);

        .subtitle {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 0.95rem;
                font-weight: 600;
                font-family: 'Indie Flower', cursive;
                color: var(--primary);
            }
        }
        &:hover {
            cursor: pointer;
            border: 1px solid var(--primary);
            transform: scale(1.1);
        }

        img {
            height: 30px;
            width: 30px;
        }

        span {
     
            font-size: 0.8rem;
            font-weight: 400;
        }
    }
`
