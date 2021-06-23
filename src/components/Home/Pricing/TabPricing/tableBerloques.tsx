import {TablePricing} from '../styles'


interface TablePricingProps {
  active: boolean;
}



export function TableBerloques(props: TablePricingProps) {
   

    return (
        <TablePricing active={props.active}>
                    <tr>
                <th>Material</th>
                <th>Tipo</th>
                <th>Preço</th>
              </tr>
              <tbody>
              <tr>
                <td>Banhado a Prata</td>
                <td>Berloque</td>
                <td className="price">R$ 9,50</td>
              </tr>
              <tr>
                <td>Banhado a Prata</td>
                <td>Separador</td>
                <td className="price">R$ 9,50</td>
              </tr>
              <tr>
                <td>Banhado a Prata</td>
                <td>Separador com Strass</td>
                <td className="price">R$ 12,00</td>
              </tr>
              <tr>
                <td>Banhado a Prata</td>
                <td>Berloque com Strass</td>
                <td className="price">R$ 12,00</td>
              </tr>
              <tr>
                <td>Envernizado</td>
                <td>Berloque</td>
                <td className="price">R$ 9,00</td>
              </tr>
              <tr>
                <td>Níquel</td>
                <td>Berloque</td>
                <td className="price">R$ 9,00</td>
              </tr>

              <tr>
                <td>Níquel</td>
                <td>Berloque de Profissão</td>
                <td className="price">R$ 12,00</td>
              </tr>

              <tr>
                <td>Níquel</td>
                <td>Berloque com Strass</td>
                <td className="price">R$ 12,00</td>
              </tr>

              <tr>
                <td>Níquel</td>
                <td>Berloque de Signo</td>
                <td className="price">R$ 12,00</td>
              </tr>

              <tr>
                <td>Níquel</td>
                <td>Separador com Strass</td>
                <td className="price">R$ 12,00</td>
              </tr>

              <tr>
                <td>Níquel</td>
                <td>Charm para Relicário</td>
                <td className="price">R$ 08,00</td>
              </tr>
              </tbody>
        </TablePricing>
    )
}

