import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <p>São bijus com banho de prata 925 e outras folheadas com banho nacional e que recebem verniz para maior durabilidade das peças.
            </p>
        </Ask>
    )
}

