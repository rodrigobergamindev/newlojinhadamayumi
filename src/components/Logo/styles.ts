import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 900px) {
            display: none;
      }

    img {
    
        width: 90px;
        height: 50px;

        @media only screen and (max-width: 900px) {
            width: 40px;
            height: auto;
      }
    }

    h2 {
        font-weight: 600;
        font-size: 1.6rem;
        margin-left: 0.5rem;
    }


`