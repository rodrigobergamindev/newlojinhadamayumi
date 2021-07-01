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
                <li key={index}><a href={item.url}>{item.title}</a></li>
            )
        })}
      </ContainerNav>

      <Contato/>
      </Nav>

      <SubMenu active={active} onMouseLeave={() => setActive(false)}>
      <SubContainer>

      
      <ContainerSubMenu>
      <a href="https://drive.google.com/file/d/1QKb-r1gr5LtEoo6gKlOvQMJYcfnh5DsE/view?usp=sharing" target="_blank">
        <h4>BERLOQUES</h4>
      <ul>
        <li>Banhados a Prata</li>
        <li>Envernizados</li>
        <li>Níquel Free</li>
      </ul>
      </a>
      </ContainerSubMenu>
      
      <ContainerSubMenu>
      <a href="https://drive.google.com/file/d/1Au_1vcOvM_DSm686KKpyBsvuuAg93qyY/view?usp=sharing" target="_blank">
        <h4>PULSEIRAS</h4>
      <ul>
        <li>Banhadas a Prata</li>
        <li>Envernizadas</li>
        <li>Braceletes</li>
      </ul>
      </a>
      </ContainerSubMenu>

      <ContainerSubMenu>
      <a href="https://drive.google.com/file/d/1Au_1vcOvM_DSm686KKpyBsvuuAg93qyY/view?usp=sharing" target="_blank">
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
      </a>
      </ContainerSubMenu>

      <ContainerSubMenu>
      <a href="https://drive.google.com/file/d/1WEDmwG9UwfQn3B5OJb8X6gKewbQ08W-v/view?usp=sharing" target="_blank">
        <h4>MURANOS</h4>
      <ul>
        <li>Murano</li>

      </ul>
      </a>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <h4>OUTROS</h4>
      <ul>
        <li><a href="https://drive.google.com/file/d/1o31OlEgUmgH5Nzh1MEB4F7wfLxNvaKP9/view?usp=sharing" target="_blank">Colar com Pingente</a></li>
        <li><a href="https://drive.google.com/file/d/1MK9tfPUxSL0F0XDcULc0Skj7zbrYeXZ9/view?usp=sharing" target="_blank">Colar Tiffany</a></li>
        <li><a href="https://drive.google.com/file/d/1MK9tfPUxSL0F0XDcULc0Skj7zbrYeXZ9/view?usp=sharing" target="_blank">Pulseira Tiffany</a></li>

      </ul>
      </ContainerSubMenu>

      <ContainerSubMenu>
        <a href="https://drive.google.com/file/d/14Qts8zYV_0S_lbeXEzH02PD1iXfdXQZm/view?usp=sharing" target="_blank">
        <h4>ARGOLAS</h4>
      <ul>
        <li>Folheadas</li>
        <li>Cravejadas</li>
       
      </ul>
      </a>
      </ContainerSubMenu>
      </SubContainer>

      </SubMenu>
    </Container>
  )
}

