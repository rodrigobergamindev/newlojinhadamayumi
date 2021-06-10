
import {carouselItems} from './carouselItems'
import TouchCarousel from 'react-touch-carousel'
import {CarouselContainer} from './styles'

export function CarouselProducts() {




      
      function renderCard (index, modIndex, cursor) {
        const item = carouselItems[modIndex]
        
        return (
            <>

                {carouselItems.map((item, index) => {
                    <div>
                       <img src={item.img} alt="" />
                       <h2>{item.title}</h2>
                    </div>
                })}
            </>
        )

      }
      
    
   

    return(
        <TouchCarousel
        component={CarouselContainer}
        cardCount={carouselItems.length}
        cardSize={375}
        renderCard={renderCard}
        loop
        autoplay={3000}
        />
    )
    
}