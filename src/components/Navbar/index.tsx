import {Nav} from './styles'
import {Logo} from '../Logo/index'
import {NavItems} from './NavItems'
import {Contato} from './Contato'

export function Navbar() {
  return (
    
    <Nav>
      
      <Logo/>

      <NavItems/>

      <Contato/>
    </Nav>
  )
}

