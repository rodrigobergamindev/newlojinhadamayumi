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
                <td>Murano</td>
                <td className="price">R$ 09,50</td>
              </tr>
              </tbody>
        </TablePricing>
    )
}

