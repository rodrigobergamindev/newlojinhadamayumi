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
    }

    
`

export const TablePricing = styled.table`
    display: ${props => props.active ? "auto" : "none"};
    margin-top: 1rem;
    border-collapse: collapse;
    width: 100%;
    color: #34495e;
    cursor: pointer;

    tbody {
        overflow-y: scroll; 
        height: 100px;
        margin: 0;
        border: none;
        }
    
    

    td, th {
        
        text-align: left;
        padding: 8px;
        padding: 1rem;
}



th {
    background: var(--primary);
    color: var(--secondary);
    font-size: 1.2rem;
    font-weight: 400;
}

tr {
    transition: all 0.3s ease;
    &:hover{
        background: var(--primary);
        color: white;
        transition: all 0.3s ease;
    }
}


`