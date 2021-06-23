
import {useState} from 'react'
import {Tab, Container, ContainerTable} from './styles'
import {Table} from './table'





export function TabPulseiras() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>PULSEIRAS & BRACELETE</span>
      <img src="/img/icons/arrowRed.png" alt=""/>
    </Tab>

    <ContainerTable active={active}>
          <Table active={active}/>
        </ContainerTable>

    </Container>
  
  )
  
}
