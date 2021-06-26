import {carouselItems} from './carouselItems'
import {CarouselContainer, CardProduct} from './styles'

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



export function CarouselProducts() {

    
    return(
          <CarouselContainer>

    <Swiper
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex: 0}}
      spaceBetween={30}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 1000,  disableOnInteraction: false}}
      speed={1200}
      className="react-carousel"
    >
      {carouselItems.map((item, index) =>{
                return (

                        <SwiperSlide key={index} style={{width:'300px'}}>
                          <a href={item.url} target="_blank">
                          <CardProduct>
                            <div className="fakeBackground">
                              <img src={item.img} alt="" />
                            <div className="title">

                            <h3>
                              {item.title}
                            </h3>
                            <span>Saiba mais</span>

                            </div>
                        
                            </div>
                            
                          </CardProduct>
                          </a>
                          </SwiperSlide>
                 
                )
      })}
    </Swiper>

    <Swiper
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex: 0}}
      spaceBetween={0}

      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 1000,  disableOnInteraction: false}}
      speed={1200}
      className="mobile"
    >
      {carouselItems.map((item, index) =>{
                return (

                        <SwiperSlide key={index} style={{width:'300px'}}>
                          <a href={item.url} target="_blank">
                          <CardProduct>
                            <div className="fakeBackground">
                              <img src={item.img} alt="" />
                            <div className="title">

                            <h3>
                              {item.title}
                            </h3>
                            <span>Saiba mais</span>

                            </div>
                        
                            </div>
                            
                          </CardProduct>
                          </a>
                          </SwiperSlide>
                 
                )
      })}
    </Swiper>

    
       
        </CarouselContainer>
    
    )
    
}