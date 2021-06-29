
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import {GlobalStyle} from  '../global'
import { Home } from '../components/Home'
import {Footer} from '../components/Footer/Footer'
import { NavbarMobile } from '../components/NavbarMobile'
import {useState} from 'react'


export default function App() {



  return (
    <>
      <Head>
            <title>Lojinha da Mayumi</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      <Navbar/>
      <NavbarMobile/>
      
      <Home/>
      
      <img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/>


      <GlobalStyle/>
    </>
  )
}
