import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
height: 100vh;

    background-attachment: fixed;
    background: url('/img/backgroundHeader.jpeg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h1{
    color: var(--secondary);
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 3rem;
 
    text-align: center;
}


h2 {
    color: var(--secondary);
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
}


button {
    padding: 1rem;
    outline: 0;
    border:0;
    background-color: var(--primary);
    color: var(--secondary);
    border-radius: 2px;
    margin-top: 4rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        filter: brightness(90%);
    }
    
}







`