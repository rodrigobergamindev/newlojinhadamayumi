import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;

    img {
    
        width: 90px;
        height: 50px;
    }

    h2 {
        font-weight: 600;
        font-size: 1.2rem;
        margin-left: 0.5rem;
    }


    @media (max-width: 930px) { 
        
        h2 {
            color: var(--secondary);
            margin-left: auto;
        }
        img {
            display: none;
        }
    }

`