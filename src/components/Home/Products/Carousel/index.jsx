import {carouselItems} from './carouselItems'
import {CarouselContainer} from './styles'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export function CarouselProducts() {

    
    return(
          <CarouselContainer>

    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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