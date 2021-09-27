import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    margin-bottom: 5rem;

    background-color: var(--primary);
    background-image: -webkit-linear-gradient( -28deg, var(--primary) 0%, var(--primary) 55%, var(--secondary) 55%, var(--secondary) 55%);
    background-image: linear-gradient( -90deg, var(--primary) 0%, var(--primary) 35%, var(--secondary) 35%, var(--secondary) 35%);

    @media only screen and (max-width: 900px) {
             height:auto;
            background: var(--secondary);
        }
    

    .about {
        display: grid;
        width: 100%;
        max-width: 1120px;


        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        gap: 2rem;

        @media only screen and (max-width: 900px) {
             grid-template-columns: repeat(1, 1fr);
        }

        img {
            max-width: 500px;
            max-height: 100%;
            border-radius: 4px;

        }

        .avatar {
            @media only screen and (max-width: 900px) {
                display: none;
            }
        }

        .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        h4 {
            color: var(--primary);
            margin-bottom: 2rem;
            font-size: 2rem;
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