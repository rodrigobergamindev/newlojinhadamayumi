import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <p>Se bem cuidadas as peças podem durar por vários anos. O que são bons cuidados? Evite molhar as peças, borrifar perfume, entrar na psicina, treinar
                ou passar qualquer produto químico que vá entrar em contato diretamente com a peça, isso pode afetar a durabilidade das peças.
            </p>
        </Ask>
    )
}

