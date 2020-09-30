import React from 'react'
import Head from 'next/Head';
import Zoom from 'react-reveal/Zoom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Layout({ title, children }) {
  return (
    <div>
        <Head>
        <script src="https://kit.fontawesome.com/80bd54fff9.js" crossOrigin="anonymous"></script>
        <title>testing1-2-3</title>
        </Head>    
        <main className="container">
            {children}
        </main>
    </div>
  )
}
