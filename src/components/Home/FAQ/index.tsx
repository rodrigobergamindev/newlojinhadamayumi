import {Container} from './styles'



export function Faq() {



    return (
        <Container>

            <div className="catalogContainer">

                <div className="description">
                    <h2>Está com alguma <strong>dúvida</strong> ?</h2>
                    <span>Selecionamos algumas dúvidas mais frequentes, acesse nosso FAQ</span>
                </div>

                <div className="containerAsks">

                <button>Garantia</button>
                <button>Composição das Peças</button>
                <button>São compatíveis com a pulseira Vivara ou Pandora ?</button>
                <button>Pode molhar?</button>
                <button>Vocês efetuam troca?</button>

                </div>
                
            </div>
        </Container>
    )
}

