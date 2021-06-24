import {Container, Nav, ContainerNav, DropdownMenu, SubMenu, ContainerSubMenu, SubContainer} from './styles'
import {Logo} from '../Logo/index'
import {Contato} from './Contato'
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
              <DropdownMenu active={active}
              onClick={() => setActive(!active)}
              key={index} 
              ><span>{item.title}</span><img className="arrow" src="/img/icons/arrowRed.png" alt="submenu"></img>
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

      <SubMenu active={active} onMouseLeave={() => setActive(false)}>
      <SubContainer>

      
      <ContainerSubMenu>
        <h4>BERLOQUES</h4>
      <ul>
        <li>Banhados a Prata</li>
        <li>Envernizados</li>
        <li>Níquel Free</li>
      </ul>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <h4>PULSEIRAS</h4>
      <ul>
        <li>Banhadas a Prata</li>
        <li>Envernizadas</li>
        <li>Braceletes</li>
      </ul>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <h4>TRAVAS</h4>
      <ul>
        <li>Clip Strass</li>
        <li>Clip Comum</li>
        <li>Corrente Comum</li>
        <li>Corrente Coração</li>
        <li>Clip Corrente Coração</li>
        <li>Clip Banhada</li>
        <li>Corrente Banhada</li>
        <li>Corrente Envernizada</li>
        <li>Silicone</li>
      </ul>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <h4>MURANOS</h4>
      <ul>
        <li>Murano</li>

      </ul>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <h4>OUTROS</h4>
      <ul>
        <li>Colar com Pingente</li>
        <li>Colar Tiffany</li>
        <li>Pulseira Tiffany</li>

      </ul>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <h4>ARGOLAS</h4>
      <ul>
        <li>Folheadas</li>
        <li>Cravejadas</li>

      </ul>
      </ContainerSubMenu>
      </SubContainer>

      </SubMenu>
    </Container>
  )
}

