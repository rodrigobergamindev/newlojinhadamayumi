
import {useState} from 'react'
import {Tab, Container, ContainerTable} from './styles'
import {AskArea} from './ask'





export function TabCompatibilidade() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>São compatíveis com as pulseiras Vivara e Pandora?</span>
      <img src="/img/icons/arrowRed.png" alt=""/>
    </Tab>

     <ContainerTable active={active}>
          <AskArea active={active}/>
        </ContainerTable>

    </Container>
  
  )
  
}
