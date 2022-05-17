// import React from 'react'
import React, { useState, useEffect } from "react";
// import post from '../api/book'
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import styles from "../../styles/Bookform.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function scholarshipUpdate() {

  const router = useRouter();
  const [scholarship_name, setScholarship_name] = useState("");
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    // const dt = await data.json();
    const contentType = "application/json";

    let scholarshipreq = {
      scholarship_name,
      details,
      type,
    };
    let response = await fetch("http://localhost:3000/api/scholarship/sc", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(scholarshipreq),
      
    });
    
    let dataa = await response.json();
    
    if (dataa.success) {
      setScholarship_name("");
      setDetails("");
      setType("");
      
      toast.success(dataa.message);
      toast.info("We are reviewing your Data,Thanks 🙏")
      // setTimeout(() => {
        //   router.push("./availablebooks");
        // }, 1000);
      } else {
        return toast.error(dataa.message);
      }
    };
    
    const { data } = useSWR("../api/me", async function (args) {
        const res = await fetch(args);
        return res.json();
      });
      // const data =  fetch("../api/me");
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }



  return (
    <div>
        <Head>
        <meta charSet="UTF-8" />
        <title>Add Scholarship</title>
      </Head>
<div>
         <ToastContainer />
        {loggedIn && (
        <> 
        <div className="body">
          {/* <Link href="./availablebooks" passHref>
            <button
              className="btn"
              style={{ width: `90vw`, marginLeft: `5vw` }}
            >
              <a>Requesting Books</a>
            </button>
          </Link> */}

          <div className="container">
            <h2>Scholarship Update</h2>
            <form onSubmit={handlePost} className={styles.form}>
              <input
                className="form-control"
                placeholder="Scholarship Title"
                type="text"
                required={true}
                name="scholarship_name"
                value={scholarship_name}
                onChange={(e) => setScholarship_name(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                placeholder="Details"
                type="text"
                required={true}
                name="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <br />


              {/* <input
                className="form-control"
                placeholder="Type"
                type="text"
                required={true}
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              /> */}



<div className="radiogroup">
  <div className="wrapper">
    <input className="state" type="radio" id="a"  name="type"
                value={type}
                onChange={(e) => setType('Inter College')}/>
    <label className="label" htmlFor="a">
      <div className="indicator"></div>
      <span className="text">Inter College</span>
    </label>
  </div>
  <div className="wrapper">
    <input className="state" type="radio"  id="b"  name="type"
                value={type}
                onChange={(e) => setType('Intra College')}/>
    <label className="label" htmlFor="b">
      <div className="indicator"></div>
      <span className="text">Intra College</span>
    </label>
  </div>

</div>






              <button className="btn" type="submit">
              Add Scholarship
              </button>
              <br />
            </form>
          </div>
        </div>
        </>
      )}
      {!loggedIn &&  (
        <div className="body padding">    
        <div className="container">
        
          
 <h1>Sorry, Your are not Logged in please login first</h1>
 <div>
  
              <Link href="http://localhost:3000/user/login" passHref>
              <button className="btn" >
                  login
              </button>
              </Link>
                </div>
<div>
<Link href='/' passHref><button className="btn" onClick={()=>toast.info("Welcome to Home Page")}>
            Homepage
          </button>
          </Link>

</div>
            </div>
         </div>
      )}
      </div>
      
    </div>
  )
}

export default scholarshipUpdate