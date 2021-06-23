import styled from 'styled-components';


export const Tab = styled.div`

   
    background-color: var(--primary);
    border-radius:4px;
    color: white;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;  
    
    font-size:1.2rem;

    img {
        align-self: center;
        width: 15px;
        height: 15px;
        transform:${props => props.active ? "rotateZ(180deg)" : "rotateZ(0deg)"};
        transition: all 0.3s ease;
    }

    &:hover {
        cursor: pointer;
    }

`


export const Container = styled.div`

    display: flex;
    flex-direction: column;

`

export const ContainerTab = styled.div`

   display: flex;
   flex-direction: column;


`