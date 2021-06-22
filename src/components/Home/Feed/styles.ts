
import styled from 'styled-components';


export const StyledFeed = styled.div`
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 100%;
`

export const CardPost = styled.div`
    max-width: 250px;
    height: 250px;
    display:flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.5s ease;
    display: flex;
    
    .post {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease;
        filter: ${props => props.postActive ? "brightness(75%)" : "none"};
       
        &:hover { 
            transform: ${props => props.postActive ? "scale(1.2)" : "none"}
        }
    }
    a{
        display:flex;
        align-items:center;
        justify-content: center;
    }

    .instagram {
        position: absolute;
        align-self: center;
        max-width: 30px;
        max-height: 30px;
        visibility: ${props => props.postActive ? "visible" : "hidden"};
    }
`


export const DisplaySocialMedia = styled.div`

    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 1120px;
    
    
    

    .title {
        color: var(--secondary);
        background: var(--primary);
        width: 100%;

        
        margin-top: 5rem;
        margin-bottom: 5rem;
        border-radius: 4px;


   

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        gap: 2rem;



        .description {
                display: flex;
                flex-direction: column;
                padding: 2rem;

                color: var(--secondary);
               

                h2 {
                    font-weight: 400;
                    font-size: 2.2rem;
                    
                    strong {
                        font-weight: 600;
                    }
                    margin-bottom: 1rem;
                }
                }
        
        button {
            background: var(--secondary);
            outline: 0;
            border: 0;
            
            

            display: flex;
            justify-content:center;
            padding: 1rem;
            border-radius: 2px;

            
            transition: 0.3s ease-in-out;
            border-radius: 4px;

            img {
                max-width: 30px;
                margin-right: 0.3rem;
            }

            span {
                font-size: 1.2rem;
                color: var(--primary);
            }

            &:hover{
                transition: 0.3s ease-in-out;
                filter: brightness(95%);
            }

        }
    }
`

