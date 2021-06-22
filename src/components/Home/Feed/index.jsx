import {useState, useEffect} from 'react'
import { Post } from './Post';
import {StyledFeed, DisplaySocialMedia} from './styles'

import SwiperCore, {A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);




const tokenAcess = 'IGQVJXa1ZA2dEZAuUDBDMmpHZAWFrVUtrQTNUQndiOTRLVWlmelpqZAnJ5OERlY3I3Mnd6YTBOc2txX25nX1RVbjlwcHVZAZA3c4VnI0UGp2dmtrR2FidEtFdGdBTEx5UENoeTRMMlEtam1leHc1VkNQeWRSWgZDZD'



export  function Feed() {
    const [feed, setFeed] = useState([]);
    const [postActive, setPostActive] = useState(false);


    useEffect(() => {
        fetch(`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=${tokenAcess}`)
        .then(response => response.json())
        .then(data => setFeed(data.data))
    }, [])



  return (

    <DisplaySocialMedia>

    <div className="title">
        <div className="description">
                    <h2>Conheça nosso <strong>Instagram</strong></h2>
                    <span>Fique sempre por dentro das nossas novidades em primeira mão!</span>
                </div>

                <a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank"><button><img src="/img/socialMedia/instagram.png" alt="instagram" /><span>@lojinha_da_mayumi</span></button></a>
    </div>



      <StyledFeed>
      <Swiper
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838'}}
      slidesPerView={4}
      spaceBetween={25}

      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 2000,  disableOnInteraction: false}}
    >
                {
                   feed.map((post, index) => {
                            return (
                                <SwiperSlide key={index}><Post key={post.id} post={post}/></SwiperSlide>
                               )
                   }) 
                }
    </Swiper>
      </StyledFeed>

      </DisplaySocialMedia>
  )
}