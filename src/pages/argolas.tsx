
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import { DisplayPDF } from '../global'


export default function Argolas() {



  return (
    <>
      <Head>
            <title>Argolas</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


      <DisplayPDF>
          <iframe src="/archives/argolas.pdf"/>
      </DisplayPDF>
    </>
  )
}
