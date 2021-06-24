import {StyledFooter} from './styles'

export function Footer() {
    return (
        <StyledFooter>
        
            <div className="containerLogo">

            <div className="logo">
                <img src="/img/logo.png" alt="" />
                
                <div className="titleLogo">
                    
                <h2>LOJINHA DA MAYUMI</h2>
                <span>Arigatou Gozaimasu ⛩</span>
                </div>
            

                </div>
                <div className="description">
                    <h4>FUNCIONAMENTO</h4>
                    <p>São Paulo - SP</p>
                    <p>Segunda à Sábado - 09:00 às 17:00</p>
                    </div>
            </div>

            <div className="contatos">

                <h4>CONTATOS</h4>
               <ul>
                   <li><img src="/img/icons/mail.png" alt="" /> <span>atendimento@lojinhadamayumi.com</span></li>
                   <li><img src="/img/icons/whatsfooter.png" alt="whatsapp" /> <span>(11) 2963-9226</span></li>
               </ul>
            </div>


            <div className="mapa">

                <h4>MAPA DO SITE</h4>
               <ul>
                   <li>Sobre</li>
                   <li>Produtos</li>
                   <li>Comprar</li>
                   <li>Dúvidas Frequentes</li>
                   <li>Contatos</li>
               </ul>
            </div>

            
       
        </StyledFooter>
    )
}
