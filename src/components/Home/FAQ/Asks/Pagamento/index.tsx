
import {useState} from 'react'
import {Tab, Container, ContainerTable} from './styles'
import {AskArea} from './ask'





export function TabPagamento() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span>Quais as formas de pagamento?</span>
      <img src="/img/icons/arrowRed.png" alt=""/>
    </Tab>

     <ContainerTable active={active}>
          <AskArea active={active}/>
        </ContainerTable>

    </Container>
  
  )
  
}
