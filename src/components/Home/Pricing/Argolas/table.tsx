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
                <td>Folheada</td>
                <td>Argola</td>
                <td className="price">R$ 25,00</td>
              </tr>
              <tr>
                <td>Cravejada</td>
                <td>Argola</td>
                <td className="price">R$ 25,00</td>
              </tr>
              </tbody>
        </TablePricing>
    )
}

