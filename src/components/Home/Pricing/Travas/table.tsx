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
                <td>Trava Clip Strass</td>
                <td className="price">R$ 16,00</td>
              </tr>

              <tr>
                <td>Envernizada</td>
                <td>Trava Clip</td>
                <td className="price">R$ 14,00</td>
              </tr>

              <tr>
                <td>Envernizada</td>
                <td>Trava Corrente</td>
                <td className="price">R$ 22,00</td>
              </tr>

              <tr>
                <td>Envernizada</td>
                <td>Trava Clip Corrente Coração</td>
                <td className="price">R$ 24,00</td>
              </tr>

              <tr>
                <td>Banhado a Prata</td>
                <td>Trava Clip Corrente</td>
                <td className="price">R$ 14,00</td>
              </tr>

              <tr>
                <td>Banhado a Prata</td>
                <td>Trava Corrente</td>
                <td className="price">R$ 28,00</td>
              </tr>

              <tr>
                <td>Silicone</td>
                <td>Trava</td>
                <td className="price">R$ 10,00</td>
              </tr>
              </tbody>
        </TablePricing>
    )
}

