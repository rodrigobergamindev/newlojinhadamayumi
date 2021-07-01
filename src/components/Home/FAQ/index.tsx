import {Container, ContainerAsks} from './styles'
import {TabGarantia} from './Asks/Garantia/index'
import {TabComposicao} from './Asks/Composicao/index'
import {TabCompatibilidade} from './Asks/Compatibilidade/index'
import {TabDurabilidade} from './Asks/Durabilidade/index'
import {TabTroca} from './Asks/Troca/index'
import { TabPagamento } from './Asks/Pagamento'

export function Faq() {



    return (
        <Container id="faq">

                <div className="title">

                <h2>Dúvidas Frequentes</h2>

                </div>
            
    

            <ContainerAsks>

            
                <TabGarantia/>
                <TabComposicao/>
                <TabCompatibilidade/>
                <TabDurabilidade/>
                <TabTroca/>
                <TabPagamento/>
            </ContainerAsks>
        </Container>
    )
}

