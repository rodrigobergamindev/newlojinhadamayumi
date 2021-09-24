import {Container} from './styles'
import {useState} from 'react'
import {carouselItems} from '../Products/Carousel/carouselItems'
import { Card } from './Card';

export function DisplayCat() {

    const [postActive, setPostActive] = useState(false);


    return (
        <Container>

           {carouselItems.map(item => {
               if(item.url !== "/argolas") {
                return (
                    <Card item={item} postActive={postActive} onMouseOver={() => setPostActive(true)} onMouseLeave={() => setPostActive(false)}/>
                   )
               }
           })}

        </Container>
    )
}

