import {ContainerNav} from './styles'
import {menu} from './assets/nav'


export function NavItems() {
  return (
      <ContainerNav>
        {menu.map((item, index) => {
          if(item.title === 'Produtos') {
            return (
              <li key={index}><span>{item.title}</span><img className="arrow" src="/img/icons/arrow.png" alt="submenu"></img></li>
            )
          }
            return (
                <li key={index}>{item.title}</li>
            )
        })}
      </ContainerNav>
  )
}

