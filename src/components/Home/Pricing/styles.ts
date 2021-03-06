import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .containerTables{
        
        width: 100%;
        max-width: 1120px;
        margin-bottom: 5rem;


        .title {
            color: white;
            background-image: url('/img/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width: 100%;

margin-top: 3rem;
margin-bottom: 3rem;
border-radius: 4px;
border: 1px solid transparent;
transition: 0.3s ease-in-out;
cursor: pointer;





display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: center;
align-items: center;
gap: 2rem;

    @media only screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
            padding: 2rem;
            box-shadow: none;
            margin-bottom: auto;
        }

.description {
        display: flex;
        flex-direction: column;
        padding: 2rem;

        @media only screen and (max-width: 900px) {
            padding: 1rem;
        }
       

        h2 {
            font-weight: 400;
            font-size: 2.2rem;

            @media only screen and (max-width: 900px) {
            font-size: 2rem;
        }
            
            strong {
                font-weight: 600;
                color: var(--primary);
                background-color: var(--secondary);
                padding-left: 0.7rem;
                padding-right: 0.7rem;
                font-family: 'Indie Flower', cursive;
                font-size: 2.5rem;
                border-radius: 5px;
            }
            margin-bottom: 1rem;
        }
        }

button {
    background: var(--primary);
    border:0;
    outline: 0;
    display: flex;
    justify-content:center;
    padding: 1rem;
    border-radius: 1px;
    
    
    transition: 0.3s ease-in-out;
    border-radius: 4px;

    img {
        max-width: 25px;
        margin-right: 0.3rem;
        margin-right: 0.5rem;
    }

    span {
        font-size: 1.2rem;
        color: var(--secondary);
    }

    &:hover{
        transition: 0.3s ease-in-out;
        filter: brightness(120%);
    }

}
}
    }

    
`

export const TablePricing = styled.table`
    display: ${props => props.active ? "auto" : "none"};
    margin-top: 1rem;
    border-collapse: collapse;
    width: 100%;



    td, th {
        
        text-align: left;
        padding: 0.9rem;
        border-bottom: 1px solid #dddddd;
        cursor: pointer;
    }
    



th {
   color: var(--primary);
    font-size: 1.2rem;
    font-weight: 400;

}

tr {
    transition: 0.3s ease-in-out;
    &:hover {
        color: var(--primary);
        transition: 0.3s ease-in-out;
    }
}



`



export const HeaderModal = styled.div`
    
    padding: 1rem;
    display: flex;
    justify-content: space-between;
 
   
    h2{
        color: #333;
        font-weight: 400;
        border-bottom: 1px solid red;
        padding: 1rem;
        
        strong {
            font-weight: 600;
            color: var(--primary);
        }
        margin-right: 3rem;
        font-size: 2.5rem;
        
    }
    img {
        cursor:pointer;
        align-self: flex-start;
        top:5px;
        right: 5px;
        position:absolute;
        padding: 0.4rem;
        background-color: var(--primary);
        max-width: 40px;
        max-height: 40px;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.8);
        }
    }

`

export const BodyModal = styled.div`
    padding-left: 2rem;
    ul {
        list-style: none;

        a{
            font-size: 1.3rem;
            line-height: 2.9rem;
            transition: 0.2s ease-in-out;
            cursor: pointer;
            
            &:hover {
                color: var(--primary);
            }
        }
    }

`

export const ContainerModal = styled.div`
    
    display: flex;
    flex-direction: column;
`
