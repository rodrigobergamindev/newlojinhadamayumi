import {Container} from './styles'
import {Slider} from './Slider/index'
import {ShippingSection} from './ShippingContent/index'
import { ProductsContent } from './Products'
import { About } from './About'
import { Feed } from  './Feed/index'
import { Pricing } from './Pricing'
import {Faq} from './FAQ/index'
import {Contact} from './Contact/index'
import {Footer} from '../Footer/Footer'
import { DisplayCat } from './DisplayCat'


export function Home(props) {



    return (
        
        <Container open={props.open}>
        <Slider/>
        <ShippingSection/>
        <ProductsContent/>
        <About/>
        <DisplayCat/>
        <Feed/>
        <Pricing/>
        <Faq/>
        <Contact/>  
        <Footer/>
        </Container>
    )
}

