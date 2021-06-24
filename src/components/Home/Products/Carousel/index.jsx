import {carouselItems} from './carouselItems'
import {CarouselContainer} from './styles'

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



export function CarouselProducts() {

    
    return(
          <CarouselContainer>

    <Swiper
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838'}}
      spaceBetween={30}
      slidesPerView={2}
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 1000,  disableOnInteraction: false}}
      speed={1200}
    >
      {carouselItems.map((item, index) =>{
                return (

                        <SwiperSlide key={index} style={{width:'300px'}}><img src={item.img} alt="" /></SwiperSlide>
                 
                )
      })}
    </Swiper>
       
        </CarouselContainer>
    
    )
    
}