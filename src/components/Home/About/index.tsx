import {Container} from './styles'



export function About() {



    return (
        <Container id="sobre">

            <div className="about">
            
            <div className="description">
                <h4>SOBRE NÓS</h4>
                <h2>Contamos com um atendimento <strong>personalizado</strong> e produtos de excelente <strong>qualidade</strong></h2>
                <p>Desde sempre fui apaixonada por empreender, a Lojinha da Mayumi surgiu quando decidi unir minha paixão por acessórios femininos a minha outra paixão que é vender. 
                </p>
                
                <p>
                    Trabalhamos com as melhores peças do mercado e com uma variedade ampla de produtos, além do atendimento de excelência, 
                    temos um compromisso com a qualidade do que vendemos.</p>

                <div className="detail">
                    
                        <div className="itemDetail">
                            <img src="/img/icons/deal.png" alt="icon" />
                            <h4>1.000<strong>+</strong></h4>
                            <span>Peças vendidas</span>
                        </div>

                        <div className="itemDetail">
                            <img src="/img/icons/team.png" alt="icon" />
                            <h4>8</h4>
                            <span>Colaboradores capacitados especialmente para te atender</span>
                        </div>
                        <div className="itemDetail">
                            <img src="/img/icons/brazil.png" alt="icon" />
                            <h4>20<strong>+</strong></h4>
                            <span>Estamos em todo Brasil, já enviamos para mais de 20 estados</span>
                        </div>
                   

                </div>
            </div>

            <img src="/img/about.jpeg" className="avatar" alt="avatar" />
            </div>  

        </Container>
    )
}

