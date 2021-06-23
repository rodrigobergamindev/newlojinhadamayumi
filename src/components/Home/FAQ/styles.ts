import styled from 'styled-components';


export const Container = styled.div`

        width: 100%;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content:center;

        .title {
            max-width: 1120px;
            width: 100%;
            padding: 1rem;
            h2 {
                
                color: var(--primary);
                font-size: 3.5rem;
            }
        }
`

export const ContainerAsks = styled.div`
    margin-top: 2rem;
    width: 100%;
    max-width:1120px;
    margin-bottom: 2rem;
`