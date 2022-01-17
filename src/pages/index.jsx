

import Head from 'next/head'
import {GlobalStyle} from  '../global'
import { Home } from '../components/Home'
import {useState, useEffect} from 'react'
import {Container, StyledBurger} from '../components/NavbarMobile/styles'
import { Logo } from '../components/Logo'
import { useRouter } from 'next/router'



export default function App() {

  const [open, setOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    router.push('https://www.lojinhadamayumi.com.br/')
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
