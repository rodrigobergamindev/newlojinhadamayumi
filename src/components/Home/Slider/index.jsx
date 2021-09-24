
import {Container} from './styles'
import Typical from "react-typical";


export function Slider() {

    const frase = 'Berloques em forma de amor'

    return (
        <Container>
          <Typical
                    steps={[frase, 10000]}
                    loop={Infinity}
                    wrapper="h1"
                    />

          <button>Acesse o site</button>
        </Container>
    )
}