
import {Container} from './styles'
import Typical from "react-typical";


export function Slider() {

    const frase = 'Bem-vinda(o) a Lojinha da Mayumi'

    return (
        <Container>
          <Typical
                    steps={[frase, 10000]}
                    loop={Infinity}
                    wrapper="h1"
                    />
      <h2>Eternizamos sua história através dos nossos berloques</h2>
          <button>Deslize para baixo</button>
        </Container>
    )
}