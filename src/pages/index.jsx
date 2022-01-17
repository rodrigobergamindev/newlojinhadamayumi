

import Head from 'next/head'
import {GlobalStyle} from  '../global'
import { Home } from '../components/Home'
import {useState, useEffect} from 'react'
import {Container, StyledBurger} from '../components/NavbarMobile/styles'
import { Logo } from '../components/Logo'



export default function App() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
   window.location.replace("https://www.lojinhadamayumi.com.br")
  });

  return (
    <>
      <Head>
            <title>Lojinha da Mayumi</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>



      <GlobalStyle/>
    </>
  )
}
