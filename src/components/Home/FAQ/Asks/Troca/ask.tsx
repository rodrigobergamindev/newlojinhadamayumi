import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <p>Não efetuamos troca em nenhuma circunstância, nossa equipe confere o pedido ao menos três vezes antes do envio.
            <p>Por isso é importante que ao adquirir uma pulseira, seu tamanho esteja adequado.</p>
            </p>
        </Ask>
    )
}

