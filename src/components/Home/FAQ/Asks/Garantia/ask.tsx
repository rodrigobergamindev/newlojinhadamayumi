import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <p>Não oferecemos garantia sobre as peças, trabalhamos com peças folheadas, banhadas e resinadas. As peças podem ser danificadas com o mal uso,
              portanto, conferimos juntamente com a cliente peça por peça antes do envio para evitar maiores transtornos.
            </p>
        </Ask>
    )
}

