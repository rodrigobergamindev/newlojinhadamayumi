import styled from 'styled-components'


export const CarouselContainer = styled.div`

    display: flex;
    width: 100%;
    max-width: 620px;
    justify-content: center;
    align-items: center;
   
    `

export const CardProduct = styled.div`
    cursor: pointer;
    width: 90%;
    display:flex;
  
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-end;


    .fakeBackground {
        width: 90%;
        height: 90%;
        background-color: var(--primary);
        display: flex;
        border-radius: 5px;

        .title {
            padding: 1rem;
            align-self: flex-end;
            color: var(--secondary);
            
            h3{
                font-size: 1.4rem;
            }

        }
        
        

    img {
        position: absolute;
        right:2px;
        top: 0px;
        align-self: flex-end;
        max-width: 150px;
        max-height: 150px;
        border-radius: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    }
    
`