import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;


    background-color: var(--primary);
    background-image: -webkit-linear-gradient( -28deg, var(--primary) 0%, var(--primary) 60%, white 60%, white 60%);
    background-image: linear-gradient( -65deg, var(--primary) 0%, var(--primary) 40%, white 40%, white 40%);
    

    .about {
        display: grid;
        width: 100%;
        max-width: 1120px;


        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        gap: 2rem;

        img {
            max-width: 500px;
            max-height: 100%;
            border-radius: 4px;
        }

        .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        h4 {
            color: var(--primary);
            margin-bottom: 2rem;
        }

        h2 {
            font-weight: 400;
            font-size: 1.8rem;
            margin-bottom: 2rem;
            strong {
                color: var(--primary);
            }
        }

        .detail {
            display: grid;
        
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            gap: 1.2rem;
            margin-top: 2rem;


            .itemDetail {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            img {
                max-width: 50px;
            }

            h4 {
                font-size: 1.5rem;
                color: var(--sub);

                strong {
                    color: var(--primary);
                }
            }
            
            span {
                text-align: center;
                font-size: 0.9rem;
            }
        }

        }
    }

`