import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import useSWR from "swr";
import "../styles/globals.css";
// import '../styles/bookform.css'

export default function MyApp({ Component, pageProps }) {
// console.log(`${process.env.DOMAIN}`)

  const { data } = useSWR(`https://rkmgec.vercel.app/api/me`, async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
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
