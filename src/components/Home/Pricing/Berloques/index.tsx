
import {useState} from 'react'
import {Tab, Container, ContainerTable} from './styles'
import {Table} from './table'





export function TabBerloques() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>BERLOQUES</span>
      <img src="/img/icons/arrowRed.png" alt=""/>
    </Tab>
        <ContainerTable active={active}>
          <Table active={active}/>
        </ContainerTable>
       

      

    </Container>
  
  )
  
}
