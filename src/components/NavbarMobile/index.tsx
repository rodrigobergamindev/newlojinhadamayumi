import {Container, StyledBurger, Nav} from './styles'
import {Logo} from '../Logo/index'
import {useState} from 'react'
import Link from 'next/link'
import { carouselItems } from '../Home/Products/Carousel/carouselItems'

export function NavbarMobile() {
  const [open, setOpen] = useState(false)

  return (
      <>
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
</>

          
  )
}

