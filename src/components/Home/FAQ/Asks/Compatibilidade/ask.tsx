import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <p>Sim, são compatíveis com qualquer pulseira, seja original ou réplica. Você também pode misturar peças, como por exemplo uma pulseira banhada a prata com peças em níquel.</p>
        </Ask>
    )
}

