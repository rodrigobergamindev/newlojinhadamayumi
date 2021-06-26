import styled from 'styled-components';


export const Container = styled.div`

        width: 100%;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content:center;
        .title {
            padding: 1rem;
            max-width: 1120px;
            width: 100%;
            h2 {
                font-size: 2.1rem;
                color: var(--primary);

                @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
        }
            }
        }
        margin-bottom: 4rem;
`

export const ContainerAsks = styled.div`
    width: 100%;
    max-width:1120px;
    margin-bottom: 2rem;
`