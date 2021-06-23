import {Container} from './styles'
import {TabBerloques} from './Berloques/index'
import {TabPulseiras} from './Pulseiras/index'
import { TabColares } from './Colares/index'
import { TabTravas } from './Travas/index'
import { TabMuranos } from './Muranos/index'
import { TabTiffany } from './Tiffany/index'
import { TabArgolas } from './Argolas/index'

export function Pricing() {



    return (
        <Container>

            <div className="containerTables">

            <div className="title">
            <div className="description">
                    <h2>Tabela de <strong>valores</strong></h2>
                    <span>Aqui você pode consultar os valores das nossas peças em varejo e atacado, para maiores informações consulte nossos catálogos.</span>
                </div>

                <a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank"><button><img src="/img/icons/catalogWhite.png" alt="catálogos" /><span>Catálogos</span></button></a>
            </div>

                <TabBerloques/>
                <TabPulseiras/>
                <TabTravas/>
                <TabMuranos/>
                <TabColares/>
                <TabTiffany/>
                <TabArgolas/>
                
            </div>

        </Container>
    )
}

