import styled from 'styled-components'


export const SliderContainerDesktop = styled.div`
    width: 100%;
    max-width:1920px;

    img {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        display: none;
    }


    `


export const SliderContainerMobile = styled.div`
    width: 100%;
    display: none;
    @media only screen and (max-width: 900px) {
        display: flex;
        height: 50vh;
        margin-top: 4rem;
        img {
            height: 50vh;
            object-fit: cover;
           
        }
    }


    `

export const Container = styled.div`
margin-top: 7.35rem;

width: 100%;
max-width:1920px;


@media only screen and (max-width: 900px) {
        margin-top: 0
           
        }




`