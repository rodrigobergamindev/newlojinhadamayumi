import {useState, useEffect} from 'react'
import { Post } from './Post';
import {StyledFeed, DisplaySocialMedia} from './styles'

import SwiperCore, {A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);




const tokenAcess = 'IGQVJYa2kwSzJVNmltRWszMG9oak1jdXplemhWekNwVGR4d2J2MTE3bnc0YWdScHFIajdzR3p5N3NuM2t6RjFmUVRaeUxYMEZAVc2wxWGhGNlI0ZAnBIaTVYRXRvQjFxNjVXbjFvN3NYTVJmbnhDR3c1aQZDZD'



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
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex: 0}}
      slidesPerView={4}
      spaceBetween={25}
      autoplay={{delay: 500,  disableOnInteraction: false}}
      speed={2500}
      className="react-carousel"
    >
                {
                   feed.map((post, index) => {
                            return (
                                <SwiperSlide key={index}><Post key={post.id} post={post}/></SwiperSlide>
                               )
                   }) 
                }
    </Swiper>

    <Swiper
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex: 0,padding:"1"}}
      slidesPerView={1}
      spaceBetween={80}
      autoplay={{delay: 500,  disableOnInteraction: false}}
      speed={2500}
      className="mobile"
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