import styled from 'styled-components';


export const Tab = styled.div`

   
    border-radius:5px;
    border-bottom: ${props => props.active ? "1px solid #FF3838" : "1px solid #ccc"};
    color: ${props => props.active ? "#FF3838" : "#333"};
    transition: all 0.5s ease;
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

export const ContainerTable = styled.div`

    height: ${props => props.active ? "70px" : "0px"};
    display: flex;
    flex-direction: column;
    transition: height 1s;
    margin-bottom: ${props => props.active ? "2rem" : "auto"};
    overflow-y: hidden;
    

    @media only screen and (max-width: 900px) {
        height: ${props => props.active ? "100px" : "0px"};
       
        }


`


export const Ask = styled.div`

    padding: 1rem;


   
`