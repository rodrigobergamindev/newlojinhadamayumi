
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import { DisplayPDF } from '../global'


export default function Tiffany() {



  return (
    <>
      <Head>
            <title>Acessórios Tiffany & Co</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


      <DisplayPDF>
          <embed src="/archives/tiffany.pdf" type="application/pdf"/>
      </DisplayPDF>
    </>
  )
}
