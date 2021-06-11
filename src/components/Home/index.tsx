import {Container} from './styles'
import {Slider} from '../Slider/index'
import {ShippingSection} from './ShippingContent/index'
import { ProductsContent } from './Products'



export function Home() {



    return (
        <Container>
        <Slider/>
        <ShippingSection/>
        <ProductsContent/>
        </Container>
    )
}

