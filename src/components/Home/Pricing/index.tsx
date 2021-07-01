import {Container, ContainerModal, HeaderModal, BodyModal} from './styles'
import {TabBerloques} from './Berloques/index'
import {TabPulseiras} from './Pulseiras/index'
import { TabColares } from './Colares/index'
import { TabTravas } from './Travas/index'
import { TabMuranos } from './Muranos/index'
import { TabTiffany } from './Tiffany/index'
import { TabArgolas } from './Argolas/index'
import Modal from 'react-modal';
import {useState} from 'react'
import {carouselItems} from '../Products/Carousel/carouselItems'
import { TabAtacadoIndividual } from './AtacadoInvidual'


export function Pricing() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }



    return (
        <Container id="Comprar">

            <div className="containerTables">

            <div className="title">
            <div className="description">
                    <h2>Tabela de <strong>valores</strong></h2>
                    <span>Aqui você pode consultar os valores das nossas peças em varejo e atacado, para maiores informações consulte nossos catálogos.</span>
                </div>

                <button onClick={openModal}><img src="/img/icons/catalogWhite.png" alt="catálogos" /><span>Catálogos</span></button>
            </div>


                <TabBerloques/>
                <TabPulseiras/>
                <TabTravas/>
                <TabMuranos/>
                <TabColares/>
                <TabTiffany/>
                <TabArgolas/>
                <TabAtacadoIndividual/>

                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
        >
        <ContainerModal>

        
        <HeaderModal>
            <h2>Selecione um <strong>catálogo</strong></h2>
            <img src="/img/icons/close.png" alt="" onClick={closeModal}/>
        </HeaderModal>

        <BodyModal>
        <ul>
            {carouselItems.map((item,index) => {
                return (
                    <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
                )
            })}
        </ul>

        </BodyModal>
        </ContainerModal>
       
      </Modal>
                
            </div>

        </Container>
    )
}

