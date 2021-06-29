import {Container} from './styles'
import {Slider} from './Slider/index'
import {ShippingSection} from './ShippingContent/index'
import { ProductsContent } from './Products'
import { About } from './About'
import { Catalogs } from './Catalogs/index'
import { Feed } from  './Feed/index'
import { Pricing } from './Pricing'
import {Faq} from './FAQ/index'
import {Contact} from './Contact/index'
import {Footer} from '../Footer/Footer'

import { BrowserRouter } from 'react-router-dom';

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
        <Faq/>
        <Contact/>  
        <Footer/>
        </Container>
    )
}

