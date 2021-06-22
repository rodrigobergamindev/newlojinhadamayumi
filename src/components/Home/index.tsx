import {Container} from './styles'
import {Slider} from '../Slider/index'
import {ShippingSection} from './ShippingContent/index'
import { ProductsContent } from './Products'
import { About } from './About'
import { Catalogs } from './Catalogs/index'
import { Feed } from  './Feed/index'
import { Pricing } from './Pricing'

export function Home() {



    return (
        <Container>
        <Slider/>
        <ShippingSection/>
        <ProductsContent/>
        <Catalogs/>
        <About/>
        <Feed/>
        <Pricing/>
        </Container>
    )
}

