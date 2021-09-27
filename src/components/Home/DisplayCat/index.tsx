import {Container, Header} from './styles'
import {useState} from 'react'
import {carouselItems} from '../Products/Carousel/carouselItems'
import { Card } from './Card';

export function DisplayCat() {

    const [postActive, setPostActive] = useState(false);


    return (
        <>
        <Header>CATÁLOGOS</Header>
        <Container>
            
           {carouselItems.map(item => {
               if(item.title !== "Argolas") {
                return (
                    
                    <Card key={item.title} item={item} postActive={postActive} onMouseOver={() => setPostActive(true)} onMouseLeave={() => setPostActive(false)}/>
               
                   )
               }
           })}

        </Container>
        </>
    )
}

