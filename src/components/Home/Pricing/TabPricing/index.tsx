
import {useState} from 'react'
import {Tab, Container,ContainerTab} from './styles'
import {TableBerloques} from './tableBerloques'





export function FullWidthTabs() {

  const [active, setActive] = useState(false);

  
  return (
    <Container>

      <ContainerTab>

      
    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>BERLOQUES</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <TableBerloques active={active}/>

    </ContainerTab>

    <ContainerTab>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>PULSEIRAS</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <TableBerloques active={active}/>

    </ContainerTab>

    <ContainerTab>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>TRAVAS</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <TableBerloques active={active}/>

    </ContainerTab>

    <ContainerTab>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>MURANOS</span>
      <img src="/img/icons/arrowWhite.png" alt=""/>
    </Tab>

      <TableBerloques active={active}/>

    </ContainerTab>

    </Container>
  
  )
  
}
