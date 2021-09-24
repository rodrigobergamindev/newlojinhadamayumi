import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   
    place-items: center;
    place-content: center;

    margin-bottom: 4rem;
`


export const CardCatalog = styled.div`

    width: 100%;
    height: 35rem;


    border: 2px solid #ffff;
    display:flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.5s ease;

    cursor: pointer;
    
    .post {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease;
        filter: ${props => props.postActive ? "brightness(75%)" : "none"};

       
       
        &:hover { 
            transform: ${props => props.postActive ? "scale(1.2)" : "none"}
        }
    }
    a{
        display:flex;
        align-items:center;
        justify-content: center;
    }


    .catalogDesc{
        position: absolute;
        align-self: center;

        h2 {
            color: var(--secondary);
            font-weight: 500;
            letter-spacing: 4px;
            padding: 1rem;
            border-radius: 2px;
            border: 1px solid var(--secondary);
        }
    }
`