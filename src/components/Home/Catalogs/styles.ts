import styled from 'styled-components';


export const HeaderModal = styled.div`
    
    padding: 1rem;
    display: flex;
    justify-content: space-between;
 
   
    h2{
        color: #333;
        font-weight: 400;
        border-bottom: 1px solid red;
        padding: 1rem;

        @media only screen and (max-width: 900px) {
            font-weight: 1.5rem;
        }
        
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


export const Container = styled.div`

        width: 100%;
        height: 40vh;
        display: flex;
        justify-content:center;

        background-image: url("/img/backgroundTest.png");
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;

        .catalogContainer {
            width: 100%;
            max-width: 1120px;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            gap: 10rem;

            @media only screen and (max-width: 900px) {
                
                grid-template-columns: repeat(1, 1fr);
                gap: 3rem;
                padding: 2rem;
            }


            .description {
                display: flex;
                flex-direction: column;
                padding: 2rem;

                color: var(--secondary);


                h2 {
                    font-weight: 400;
                    strong {
                        font-weight: 600;
                    }
                    margin-bottom: 1rem;
                }
                }
        
        button {
            background: var(--primary);
            outline: 0;
            border: 0;
            
            width: 100%;
            max-width: 150px;
            font-size: 1.2rem;
            display: flex;
            justify-content:center;
            padding: 1rem;
            border-radius: 2px;

            color: var(--secondary);
            transition: 0.3s ease-in-out;

            &:hover{
                transition: 0.3s ease-in-out;
                filter: brightness(110%);
            }
        }

        
        }


        @media only screen and (max-width: 900px) {
                
                height:auto;
            }


       
`