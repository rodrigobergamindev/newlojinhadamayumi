import styled from 'styled-components'


export const SliderContainer = styled.div`
    margin-top: 7.35rem;

    width: 100%;
    max-width:1920px;

    img {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        height: 50vh;
        margin-top: 4rem;
        img {
            height: 50vh;
            object-fit: cover;
           
        }
    }


    `