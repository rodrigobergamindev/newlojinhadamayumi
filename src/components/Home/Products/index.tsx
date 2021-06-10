import {Container} from './styles'
import {CarouselProducts} from './Carousel/index'


export function ProductsContent() {
   

    return (
        <Container>
            <div className="catalogs">
                <CarouselProducts/>
            </div>
            <div className="description">
                <h4>CATÁLOGOS</h4>
                <h2>Transformamos sua <strong>história</strong> em uma <strong>pulseira</strong></h2>
                <p>Conheça os nossos catálogos, contamos com uma variedade de produtos a pronta entrega. 
                    Nossa missão é moldar a sua história em uma pulseira linda e cheia amor.</p>
            </div>
        </Container>
    )
}

