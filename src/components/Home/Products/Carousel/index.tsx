import {carouselItems} from './carouselItems'
import {CarouselContainer} from './styles'

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);





export function CarouselProducts() {

    
    return(
          <CarouselContainer>
  
  <AutoPlaySwipeableViews>
  {carouselItems.map((item, index) =>{
                return (
                       <img key={index} src={item.img} alt="" />
                )
               
            })}
  </AutoPlaySwipeableViews>
  
        </CarouselContainer>
    
    )
    
}