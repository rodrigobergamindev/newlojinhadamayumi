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
                <td>Níquel e/ou Folheada</td>
                <td>Pulseira fecho comum ou coração</td>
                <td className="price">R$ 20,00</td>
              </tr>

              <tr>
                <td>Níquel e/ou Folheada</td>
                <td>Bracelete</td>
                <td className="price">R$ 20,00</td>
              </tr>

              <tr>
                <td>Níquel e/ou Folheada</td>
                <td>Trava Clip</td>
                <td className="price">R$ 08,00</td>
              </tr>

              <tr>
                <td>Níquel e/ou Folheada</td>
                <td>Trava Corrente</td>
                <td className="price">R$ 16,00</td>
              </tr>

              <tr>
                <td>Níquel e/ou Folheado</td>
                <td>Berloques</td>
                <td className="price">R$ 07,00</td>
              </tr>

              <tr>
                <td>Níquel e/ou Folheada</td>
                <td>Trava silicone</td>
                <td className="price">R$ 07,00</td>
              </tr>

              <tr>
                <td>Banhadas a Prata 925</td>
                <td>Trava Clip</td>
                <td className="price">R$ 12,00</td>
              </tr>

              <tr>
                <td>Banhadas a Prata 925</td>
                <td>Trava Comum</td>
                <td className="price">R$ 22,00</td>
              </tr>

              <tr>
                <td>Banhadas a Prata 925</td>
                <td>Pulseira fecho comum e coração</td>
                <td className="price">R$ 25,00</td>
              </tr>

              <tr>
                <td>Banhadas a Prata 925</td>
                <td>Peças de strass</td>
                <td className="price">R$ 09,00</td>
              </tr>

              <tr>
                <td>Banhadas a Prata 925</td>
                <td>Berloques</td>
                <td className="price">R$ 08,00</td>
              </tr>

              <tr>
                <td colSpan={2}>Muranos</td>
                <td className="price">R$ 08,00</td>
              </tr>

              <tr>
                <td colSpan={2}>Valor Mínimo ATACADO</td>
                <td className="price">R$ 400,00</td>
              </tr>

            
              </tbody>
        </TablePricing>
    )
}

