import {TablePricing} from '../styles'


interface TablePricingProps {
  active: boolean;
}



export function Table(props: TablePricingProps) {
   

    return (
        <TablePricing active={props.active}>
                    <tr>
                <th>Produto</th>
                <th>Preço</th>
              </tr>
              <tbody>
              <tr>
                <td>Colar Tiffany</td>
                <td className="price">R$ 32,00</td>
              </tr>
              <tr>
              <td>Pulseira Tiffany</td>
                <td className="price">R$ 22,00</td>
              </tr>
              </tbody>
        </TablePricing>
    )
}

