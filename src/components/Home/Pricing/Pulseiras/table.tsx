import {TablePricing} from '../styles'


interface TablePricingProps {
  active: boolean;
}



export function Table(props: TablePricingProps) {
   

    return (
        <TablePricing active={props.active}>
                    <tr>
                <th>Material</th>
                <th>Produto</th>
                <th>Preço</th>
              </tr>
              <tbody>
              <tr>
                <td>Envernizada</td>
                <td>Pulseira Coração</td>
                <td className="price">R$ 35,00</td>
              </tr>

              <tr>
                <td>Envernizada</td>
                <td>Pulseira Comum</td>
                <td className="price">R$ 30,00</td>
              </tr>

              <tr>
                <td>Banhada a Prata</td>
                <td>Pulseira Comum</td>
                <td className="price">R$ 50,00</td>
              </tr>

              <tr>
                <td>Banhada a Prata</td>
                <td>Pulseira Coração</td>
                <td className="price">R$ 50,00</td>
              </tr>

              <tr>
                <td>Banhada a Prata</td>
                <td>Pulseira Cravejada</td>
                <td className="price">R$ 60,00</td>
              </tr>

              <tr>
                <td>Envernizada</td>
                <td>Bracelete</td>
                <td className="price">R$ 25,00</td>
              </tr>
              </tbody>

        </TablePricing>
    )
}

