
import {useState} from 'react'
import {Tab, Container} from './styles'
import {Table} from './table'





export function TabBerloques() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>BERLOQUES</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <Table active={active}/>

    </Container>
  
  )
  
}
