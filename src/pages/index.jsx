
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import {GlobalStyle} from  '../global'
import { Home } from '../components/Home'
import {useState} from 'react'
import {Container, StyledBurger, Nav} from '../components/NavbarMobile/styles'
import {carouselItems} from '../components/Home/Products/Carousel/carouselItems'
import Link from 'next/link'
import { Logo } from '../components/Logo'



export default function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
            <title>Lojinha da Mayumi</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      
            <Container>
        <Logo/>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
        </StyledBurger>
      </Container>

      <Nav open={open}>

        <h2>MENU</h2>

        <div className="menu">
          {carouselItems.map((item, index) => {
                  return (
                      <Link key={index} href={item.url}><span>{item.title}</span></Link>
                  )
              })}

        </div>
        </Nav>
      
      <Home open={open}/>
      
      <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20pedido!" target="_blank"><img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/></a>


      <GlobalStyle/>
    </>
  )
}
