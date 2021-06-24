import {Container} from './styles'



export function Contact() {



    return (
        <Container>

            <div className="header">
                <div className="title">
                    <h2>Siga-nos nas <strong>redes sociais</strong></h2>
                </div>

                
                    <ul>
                        <li>
                            <div className="telegram">
                                <img src="/img/socialMedia/contato.png" alt="" />

                                <div className="subtitle">
                                <p>Lojinha da Mayumi</p>
                                <p>Telegram</p>
                                </div>
                                
                            </div>
                        </li>

                        <li>

                        <div className="whatsapp">
                                <img src="/img/icons/whatsapp.png" alt="" />

                                <div className="subtitle">
                                <p>(11) 2963-9226</p>
                                <p>WhatsApp</p>
                                </div>
                                
                            </div>

                        </li>
                        <li>

                        <div className="facebook">
                                <img src="/img/icons/facebook.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinhadamayumi</p>
                                <p>Facebook</p>
                                </div>
                                
                            </div>

                        </li>

                        <li>

                        <div className="instagram">
                                <img src="/img/socialMedia/instagramWhite.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinha_da_mayumi</p>
                                <p>Instagram</p>
                                </div>
                                
                            </div>

                        </li>

                        <li>

                        <div className="tiktok">
                                <img src="/img/icons/tiktok.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinhadamayumi</p>
                                <p>Tik Tok</p>
                                </div>

                            </div>

                        </li>

                        <li>
                        <div className="shopee">
                                <img src="/img/socialMedia/shopee.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinha_da_mayumi</p>
                                <p>Shopee</p>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
           
        </Container>
    )
}

