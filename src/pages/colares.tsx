
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import { DisplayPDF } from '../global'


export default function Colares() {



  return (
    <>
      <Head>
            <title>Colares com pingente</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


      <DisplayPDF>
          <object data="/archives/colares.pdf" type="application/pdf"/>
      </DisplayPDF>
    </>
  )
}
