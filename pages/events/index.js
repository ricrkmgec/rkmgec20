import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styles from '../../styles/Necessity.module.css'
import Events from '../../models/Events'
// import dbConnect from '../../lib/mongodb'
function Index({ loggedIn,dataa }) {
  const [windowSize, setWindowSize] = useState(0)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setWindowSize(window.scrollY)
  }
  const router = useRouter();
  return (
    <div className={styles.bodyy} style={{ paddingTop: `22vh`, paddingBottom: '10vh' }}>
      <Head>
        <meta charSet="UTF-8" />
        <title>Events</title>
      </Head>
      {loggedIn && (
        <>
          <Link href={`${process.env.DOMAIN}/events/form`} passHref>
            <button
              className={windowSize > 100 ? 'btn' + ' hvr' : 'btn' + ' rt'}
              style={{ width: "12rem", justifyContent: 'center', position: 'fixed', top: '80px', zIndex: '1', }}
            >
              {/* right:windowSize>100?'-180px':'50px', */}
              Add Event
            </button>
          </Link>

          <div className='mainn' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ flexDirection: 'column', margin: '1rem', color: 'white' }}>
              <h2 style={{ color: 'orange', textDecoration: 'underline wavy blue' }}>Upcoming Workshops</h2>
            {dataa.map((data, index) => {
              return (
                data.isShow === false&&data.type==='Upcoming Workshops' && (
                  <Link href={data.link} key={index}><a>
                  <div className={styles.container}>
                    <h3 style={{ marginBlockEnd: '0', justifyContent: 'center', lineHeight: '2rem', textAlign: 'center' }}>{data.eventName}</h3>
                    <div className={styles.card}>
                      <Image className={styles.img} height={100} width={180} src={data.imageUrl[0]} objectFit={'contain'} alt="img" />
                    </div>
                    <h4 style={{ marginBlockStart: '0', textAlign: 'center' }}>Last Date : {data.date}</h4>
                  </div>
                </a></Link>
              ))})}
            </div>
            <div style={{ flexDirection: 'column', margin: '1rem', color: 'white' }}>
              <h2 style={{ color: 'orange', textDecoration: 'underline wavy blue' }}>Projects</h2>
            {dataa.map((data, index) => {
              return (
                data.isShow === false &&data.type=='Projects'&& (
                  <Link href={data.link} key={index} ><a>
                  <div className={styles.container}>
                    <h3 style={{ marginBlockEnd: '0', justifyContent: 'center', lineHeight: '2rem', textAlign: 'center' }}>{data.eventName}</h3>
                    <div className={styles.card}>
                      <Image className={styles.img} height={100} width={180} src={data.imageUrl[0]} objectFit={'contain'} alt="img" />
                    </div>
                    <h4 style={{ marginBlockStart: '0', textAlign: 'center' }}>Last Date : {data.date}</h4>
                  </div>
                </a></Link>
              ))})}
            </div>
            <div style={{ flexDirection: 'column', margin: '1rem', color: 'white' }}>
              <h2 style={{ color: 'orange', textDecoration: 'underline wavy blue' }}>Upcoming Activities</h2>
            {dataa.map((data, index) => {
              return (
                data.isShow === false && data.type=='Upcoming Activities'&&(
              <Link href={data.link} key={index}><a>
                <div className={styles.container}>
                  <h3 style={{ marginBlockEnd: '0', justifyContent: 'center', lineHeight: '2rem', textAlign: 'center' }}>{data.eventName}</h3>
                  <div className={styles.card}>
                    <Image className={styles.img} height={100} width={180} src={data.imageUrl[0]} objectFit={'contain'} alt="img" />
                  </div>
                  <h4 style={{ marginBlockStart: '0', textAlign: 'center' }}>Last Date : {data.date}</h4>
                </div>
              </a></Link>
            ))})}
            </div>
          </div>
        </>
      )}
      {!loggedIn && (
        <div className="body padding">
          <div className="container ">
            {toast.error("Please login First 🙏")}

            <div>

              <h1>Sorry, Your are not Logged in please login first</h1>
              <Link href={router.push('../user/login')} passHref>
                <button className="btn" >
                  login
                </button>
              </Link>
            </div>
            <div>

              <Link href='/' passHref><button className="btn" onClick={() => toast.info("Welcome to Home Page")}>
                Homepage
              </button>
              </Link>

            </div>
          </div>

        </div>
      )}
       <style>{`
      .rt{
        right:20px;
      }
      .hvr{
        right:-160px;
      }
      .hvr:hover{
        right:20px;
      }
      `}</style>
    </div>
  )
}

export default Index

export async function getServerSideProps(){
  // const { db } = await dbConnect();
  const event= await Events.find({});
  console.log(event)
return {
  props:{dataa:JSON.parse(JSON.stringify(event))}
}
}