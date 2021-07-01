import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <p>Aceitamos pagamento via cartão de crédito ou débito (através de link), Pix, MercadoPago, PicPay, PagSeguro, Boleto, Depósito ou Transferência Bancária.</p>
           
        </Ask>
    )
}

