import {carouselItems} from './carouselItems'
import {CarouselContainer} from './styles'

import Swiper from 'react-id-swiper';





export function CarouselProducts() {


  const params = {
    slidesPerView: 1.50,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    }
  }

    
    return(
          <CarouselContainer>
  
          <Swiper {...params}>
              {carouselItems.map((item, index) =>{
                return (
                       <img key={index} src={item.img} alt="" />
                )
               
            })}
        </Swiper>
  
        </CarouselContainer>
    
    )
    
}