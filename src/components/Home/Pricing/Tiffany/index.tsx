
import {useState} from 'react'
import {Tab, Container} from './styles'
import {Table} from './table'





export function TabTiffany() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>TIFFANY & CO</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <Table active={active}/>

    </Container>
  
  )
  
}
