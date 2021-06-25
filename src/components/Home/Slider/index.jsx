

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderContainer} from './styles'

export function Slider() {

    return (
        <SliderContainer>
        <Swiper
          style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', height:470, zIndex:0}}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          scrollbar={{ draggable: true }}
          autoplay={{delay: 4000,  disableOnInteraction: false}}
          speed={2000}
          >
     

    <SwiperSlide><img src="/img/slider/slider01.png" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/img/slider/slider01.png" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/img/slider/slider01.png" alt="" /></SwiperSlide>
    
    </Swiper>
    </SliderContainer>
    )
}