
import {Container, HeaderModal, BodyModal, ContainerModal} from './styles'
import {useState} from 'react'
import Modal from 'react-modal';
import {carouselItems} from '../Products/Carousel/carouselItems'

export function Catalogs() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }

    return (
        <Container>

            <div className="catalogContainer">

                <div className="description">
                    <h2>Acesse nossos <strong>catálogos</strong> online</h2>
                    <span>Visualize nossas peças e consule as opções disponíveis através dos catálogos</span>
                </div>
            
                <button type="button" onClick={openModal}>Download</button>
            </div>

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
        </Container>
    )
}

