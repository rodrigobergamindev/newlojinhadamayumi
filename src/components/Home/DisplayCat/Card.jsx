import {CardCatalog} from './styles'
import {useState} from 'react'
import {carouselItems} from '../Products/Carousel/carouselItems'

export function Card(props) {

    const [postActive, setPostActive] = useState(false);


    return (
     

           
    <CardCatalog postActive={postActive} onMouseOver={() => setPostActive(true)} onMouseLeave={() => setPostActive(false)}>
        <a href={props.item.url} download>              
        <img src={props.item.background} alt="" className="post"/>
        <div className="catalogDesc">
            <h2>{props.item.title.toUpperCase()}</h2>
        </div>
        </a>
    </CardCatalog>
            
    )
}

