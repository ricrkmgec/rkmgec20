import _ from 'lodash'
import Image from 'next/image'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import React, { useState ,useEffect} from 'react'
import Necessity from '../../../models/Necessity';
import User from '../../../models/User';
import dbConnect from '../../../lib/mongodb';
import styles from '../../../styles/Necessity.module.css'
import moment from 'moment';
import InnerImageZoom from 'react-inner-image-zoom';
import Link from 'next/link';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import api from '../../../lib/api';
import Head from 'next/head';

const st = {
  hoverStyle: {
    color: 'grey',
    'hover': { color: 'blue !important' },
  }
};
function Index({ dataa, data, loggedIn }) {
  const [windowSize, setWindowSize] = useState(0)
  const [isShow, setIsShow] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
 const handleScroll=()=>{
  setWindowSize(window.scrollY)
 }



 const handleUpdateClient = async (_id) => {

    try {
      await api.put(`/necessity/${_id}`, { isShow });
      // setIsShow(true);
      console.log("first")
      toast.success("sucessfully update")
      var element = document.getElementById(_id);
      await element.remove();
      console.log("sucessfully update")    
    } catch (error) {
      console.log(error);
      toast.error("something is wrong")
    }
  }

  const handleDeleteClient = async (_id) => {

    try {
      await api.delete(`/necessity/${_id}`);
      // toast({
      toast.warn("sucessfully Deleted")
      var element = document.getElementById(_id);
     await element.remove();
    } catch (error) {
      toast.error("Something is wrong")
    }
  };



  const router = useRouter();
  return (
    <div style={{ paddingTop: `22vh`, paddingBottom: '10vh' }}>
        <Head>
        <meta charSet="UTF-8" />
        <title>Necessity Update</title>
      </Head>
        <ToastContainer/>
      {loggedIn && (
        <>
          <Link href={"../necessity/form"} passHref>
            <button
              className={windowSize>100?'btn'+' hvr':'btn'+' rt'}
              style={{ width: "12rem", justifyContent: 'center', position: 'fixed', top: '80px', zIndex: '1', }}
            >
              {/* right:windowSize>100?'-180px':'50px', */}
              Add new one
            </button>
          </Link>
          <div className='mainn' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {dataa.map((data, index) => {
              return (
                data.isShow === false && (

                  <div className={styles.container} key={index} id={data._id}>
                    {/* <a href=''> */}
                    <div className={styles.card}>
                      <Image className={styles.img} height={100} width={180} src={data.imageUrl[0]} alt="img" />

                      <div className={styles.card__details}>
                        <span className={styles.tag}>Nature</span>

                        <span className={styles.tag}>Lake</span>
                        <div className={styles.name}>{data.product_name}</div>
                        <span style={{ fontSize: '15px', position: 'relative', }}>{moment(data.createdAt).fromNow()}</span>
                        <p className={styles.para}>{data.details.slice(0, 20) + "..."}</p>
<div style={{display:'flex',flexDirection:"row"}}>
                        <button style={{color:'green'}} onClick={() => handleUpdateClient(data._id)}  className={styles.abutton}><a>Approve</a></button>

                        <button className={styles.button}><Link href={`${process.env.DOMAIN}/necessity/` + data._id}><a>Read more</a></Link></button>

                        <button className={styles.dbutton} onClick={() => handleDeleteClient(data._id)}  ><a>Delete</a></button>
                        </div>
                      </div>


                    </div>
                    {/* </a> */}
                  </div>
                )
              )
            })}

          </div>
        </>
      )}
      {!loggedIn && (
        // router.push(`http://localhost:3000/user/login`)
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

export default Index;

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(``)
  // const data = await res.json()
  const { db } = await dbConnect();
  let bk = await Necessity.find({})
  let arr = []
  for (var i = 0; i < bk.length; i++) {
    let id = bk[i].userId
    let user = await User.findOne({ _id: id });
    let merge = _.merge(user, bk[i], bk[i].userId);
    arr.push(merge)
  }
  return { props: { dataa: JSON.parse(JSON.stringify(arr)) } }
}
