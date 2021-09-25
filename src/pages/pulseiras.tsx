
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import { DisplayPDF } from '../global'


export default function Pulseiras() {



  return (
    <>
      <Head>
            <title>Pulseiras e Travas</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


      <DisplayPDF>
          <object data="/archives/pulseirasetravas.pdf" type="application/pdf"/>
      </DisplayPDF>
    </>
  )
}
