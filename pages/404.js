import React from 'react'
import Link from 'next/link'
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';
function ab() {
  return (
    <div>
        <Head>
        <meta charSet="UTF-8" />
        <title>Error 404</title>
      </Head>
      <div className="body">
        <div className="container" >
          <h1 className='btn' style={{color: 'rgb(255, 0, 0'}}>This page is not please go to home page</h1>
        </div>

        <span>     &#160;</span>
        <div className="container">
        <Link href='/' passHref><button className="btn" onClick={()=>toast.info("Welcome to Home Page 🙏")}>
            Homepage
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ab