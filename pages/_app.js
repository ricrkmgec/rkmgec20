/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout";
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import ld from './../public/Ellipsis-1s-200px.svg'
import useSWR from "swr";
import "../styles/globals.css";
import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/bookform.css'

export default function MyApp({ Component, pageProps }) {
// console.log(`${process.env.DOMAIN}`)
// useEffect(()=>{
//   import("bootstrap/dist/js/bootstrap");
// },[])
  const { data } = useSWR(`${process.env.DOMAIN}/api/me`, async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return (  <div style={{
    justifyContent: 'center', margin: 'auto', alignItems: 'center', display: 'block', position: 'absolute',
    borderRadius: '50%'
  }}>
    <Image src={ld} alt='gui' height={100} width={120} />
  </div>
);
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"
        />
        
         {/* <meta httpEquiv="refresh" content="5" /> */}
      </Head>
      <Layout data={data}>
        <Component data={data} loggedIn={loggedIn} {...pageProps} />
      </Layout>
    </>
  );
}
