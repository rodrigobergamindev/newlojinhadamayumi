import {Container} from './styles'
import {contentCards} from './contentCards'

export function ShippingSection() {
   

    return (
        <Container>
            {contentCards.map((item,index) => {
                return (
                    <a href={item.url} target="_blank" key={index}>
                    <div className="card">
                        <img src={item.icon} alt="card" />
                        <div className="subtitle">
                            <span>{item.subtitle}</span>
                        </div>
                        <span>{item.title}</span>
                    </div>
                    </a>
                )
            })}
        </Container>
    )
}

