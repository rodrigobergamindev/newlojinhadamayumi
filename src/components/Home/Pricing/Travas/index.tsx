
import {useState} from 'react'
import {Tab, Container} from './styles'
import {Table} from './table'





export function TabTravas() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>TRAVAS</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <Table active={active}/>

    </Container>
  
  )
  
}
