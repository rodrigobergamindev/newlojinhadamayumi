import {Container, Nav, ContainerNav, DropdownMenu} from './styles'
import {Logo} from '../Logo/index'
import {Contato} from './Contato'
import {Submenu} from './Submenu/Submenu'
import {useState} from 'react'
import {menu} from './assets/nav'

export function Navbar() {

  const [active, setActive] = useState(false);

  return (
    
    <Container>
      <Nav>

      
      <Logo/>

      <ContainerNav>
        {menu.map((item, index) => {
          if(item.title === 'Produtos') {
            return (
              <DropdownMenu active={active} key={index} onClick={() => setActive(!active)}><span>{item.title}</span><img className="arrow" src="/img/icons/arrowRed.png" alt="submenu"></img>
              </DropdownMenu>
            )
          }
            return (
                <li key={index}>{item.title}</li>
            )
        })}
      </ContainerNav>

      <Contato/>
      </Nav>
      <Submenu active={active} onMouseOver={() => {
        setActive(false)
        console.log(active)
      }}/>
    </Container>
  )
}

