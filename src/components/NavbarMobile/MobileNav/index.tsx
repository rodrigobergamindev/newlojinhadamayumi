import {Ul} from './styles'
import {menu} from '../../Navbar/assets/nav'

interface MobileNavProps {
    open: boolean
}


export function MobileNavItems(props: MobileNavProps) {


  return (
    
    <Ul open={props.open}>
    {menu.map((item, index) => {
                 return (
                     <li key={index}><a href={item.url}>
                         {item.title}
                         </a>
                         </li>
                 )
             })}
 </Ul>
  
  )
}

