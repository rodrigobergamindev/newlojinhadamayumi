
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import { DisplayPDF } from '../global'


export default function Banhados() {



  return (
    <>
      <Head>
            <title>Berloques Banhados</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


      <DisplayPDF>
          <embed src="/archives/banhados.pdf" type="application/pdf"/>
      </DisplayPDF>
    </>
  )
}
