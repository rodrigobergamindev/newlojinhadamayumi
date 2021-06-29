import {Container} from './styles'



export function Contact() {



    return (
        <Container id="contato">

            <div className="header">
                <div className="title">
                    <h2>Siga-nos nas <strong>redes sociais</strong></h2>
                </div>

                
                    <ul>
                        <li>
                            <a href="https://t.me/joinchat/KeCpRayleIc5MGMx" target="_blank">
                            <div className="telegram">
                                <img src="/img/socialMedia/contato.png" alt="" />

                                <div className="subtitle">
                                <p>Lojinha da Mayumi</p>
                                <p>Telegram</p>
                                </div>
                                
                            </div>
                            </a>
                        </li>

                        <li>

                        <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20pedido!" target="_blank">
                        <div className="whatsapp">
                                <img src="/img/icons/whatsapp.png" alt="" />

                                <div className="subtitle">
                                <p>(11) 2963-9226</p>
                                <p>WhatsApp</p>
                                </div>
                                
                            </div>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.facebook.com/lojinhadamayumi/" target="_blank">
                        <div className="facebook">
                                <img src="/img/icons/facebook.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinhadamayumi</p>
                                <p>Facebook</p>
                                </div>
                                
                            </div>
                            </a>
                        </li>

                        <li>
                        <a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank">
                        <div className="instagram">
                                <img src="/img/socialMedia/instagramWhite.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinha_da_mayumi</p>
                                <p>Instagram</p>
                                </div>
                                
                            </div>
                        </a>
                        </li>

                        <li>
                        <a href="https://www.tiktok.com/@lojinhadamayumi?_d=secCgYIASAHKAESMgowBDdzO7ASIP10dM1mwZTbXL0%2BCDaViXjA41RepgVHUUW1RM%2Fk%2BU4tvy0fT8SfkKWHGgA%3D&_r=1&language=pt&sec_uid=MS4wLjABAAAA1OXKLkKLom_Ts9g8roTDcfgbwz7NkcIwGINKy4EQ3JZmhn6-dt_Y4momyCP2KxeM&sec_user_id=MS4wLjABAAAAGw7-QEEhsCEVEIJcIyM7eo_XzD8EH0rdhKMeSX1JoCMkeQTkFcHjxKdtS0Er1Kbo&share_app_id=1233&share_author_id=6941363400589181958&share_link_id=94dd7339-44ee-4980-ac87-d60981d87397&source=h5_m&timestamp=1620841822&u_code=di33a9l8f4alk2&user_id=6949937442866725893&utm_campaign=client_share&utm_medium=android&utm_source=whatsapp" target="_blank">
                        <div className="tiktok">
                                <img src="/img/icons/tiktok.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinhadamayumi</p>
                                <p>Tik Tok</p>
                                </div>

                            </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://shopee.com.br/lojinha_da_mayumi" target="_blank">
                        <div className="shopee">
                                <img src="/img/socialMedia/shopee.png" alt="" />

                                <div className="subtitle">
                                <p>@lojinha_da_mayumi</p>
                                <p>Shopee</p>
                                </div>

                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
           
        </Container>
    )
}

