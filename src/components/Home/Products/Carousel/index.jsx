import {carouselItems} from './carouselItems'
import {CarouselContainer} from './styles'

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



export function CarouselProducts() {

    
    return(
          <CarouselContainer>

    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{delay: 3000,  disableOnInteraction: false}}
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