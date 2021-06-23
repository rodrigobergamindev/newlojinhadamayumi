
import {useState} from 'react'
import {Tab, Container} from './styles'
import {Table} from './table'





export function TabPulseiras() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>PULSEIRAS & BRACELETE</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <Table active={active}/>

    </Container>
  
  )
  
}