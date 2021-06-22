
import {CardPost} from './styles'
import {useState} from 'react'

interface PostProps {

    post: {
        id: number;
        permalink: string;
        media_url: string;
    }
    
}


export function Post(props: PostProps) {
    const [postActive, setPostActive] = useState(false);

    return (
        <CardPost postActive={postActive} onMouseOver={() => setPostActive(true)} onMouseLeave={() => setPostActive(false)}>
            <a href={props.post.permalink} target="_blank">
            <img src={props.post.media_url} alt="" className="post"/>
            <img src="/img/socialMedia/instagramWhite.png" alt="" className="instagram"/>  
            </a>
        </CardPost>
    )
}