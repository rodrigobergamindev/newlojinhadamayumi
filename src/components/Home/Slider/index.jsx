
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderContainerDesktop,SliderContainerMobile, Container} from './styles'

export function Slider() {

    return (
        <Container>

        
        <SliderContainerDesktop>
        <Swiper
          style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex:0}}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          scrollbar={{ draggable: true }}
          autoplay={{delay: 4000,  disableOnInteraction: false}}
          speed={2000}
          >
     

    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/slider01.png"/></SwiperSlide>
    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/slider01.png"/></SwiperSlide>
    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/slider02.png"/></SwiperSlide>
    
    </Swiper>
    </SliderContainerDesktop>


    <SliderContainerMobile>
        <Swiper
          style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex:0}}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          scrollbar={{ draggable: true }}
          autoplay={{delay: 4000,  disableOnInteraction: false}}
          speed={2000}
          >
     

    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/mobileslider01.png"/></SwiperSlide>
    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/mobileslider02.png"/></SwiperSlide>
    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/mobileslider03.png"/></SwiperSlide>
    
    </Swiper>
    </SliderContainerMobile>




    </Container>
    )
}