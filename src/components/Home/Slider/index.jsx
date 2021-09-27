
import {Container} from './styles'
import Typical from "react-typical";
import { Link} from 'react-scroll';

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
        <button><Link
                activeClass="active"
        to="produtos"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
        >Deslize para baixo</Link></button>
        </Container>
    )
}