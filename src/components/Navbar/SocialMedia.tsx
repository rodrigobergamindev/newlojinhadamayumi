import {ContainerSocialMedia} from './styles'
import {socialMedia} from './assets/socialMedia'


export function SocialMedia() {
  return (
      <ContainerSocialMedia>
        {socialMedia.map((item, index) => {
            return (
                <li key={index}><a href={item.url}><img src={item.icon} alt={item.type} /></a></li>
            )
        })}
      </ContainerSocialMedia>
  )
}

