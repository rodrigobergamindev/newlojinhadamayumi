
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import { DisplayPDF } from '../global'


export default function Folheados() {



  return (
    <>
      <Head>
            <title>Berloques Folheados</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


      <DisplayPDF>
          <iframe src="/archives/folheados.pdf"/>
      </DisplayPDF>
    </>
  )
}
