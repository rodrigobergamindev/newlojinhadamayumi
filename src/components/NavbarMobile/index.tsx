import {StyledBurger, Container} from './styles'
import {Logo} from '../Logo/index'
import {useState} from 'react'
import {MobileNavItems} from './MobileNav/index'


export function NavbarMobile() {

    const [open, setOpen] = useState(false)

  return (
    
   
      <Container>
        <Logo/>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileNavItems open={open}/>
      </Container>
 
  
  )
}

