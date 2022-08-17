import React, { useState, useEffect } from "react";
import { AiFillDelete } from 'react-icons/ai';
import dbConnect from "../../lib/mongodb";
import Scholarship from "../../models//Scholarship";
import Link from "next/link";
import api from "../../lib/api"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
function index({ scholarship, loggedIn,data }) {

  const handleDeleteClient = async (_id) => {
    if(confirm("Are You sure, You want to delete?")==true){
    try {
      await api.delete(`/scholarship/${_id}`);
      // toast({
      toast.warn("sucessfully Deleted")
      var element = document.getElementById(_id);
     await element.remove();
    } catch (error) {
      toast.error("Something is wrong")
    }}
  };



let isadmin=false;
if (data.admin == true) {
  isadmin = true;
}

  return (
    <div>
       <Head>
        <meta charSet="UTF-8" />
        <title>Scholarship</title>
      </Head>
<ToastContainer/>
       {loggedIn && (
         <> 
    <div className="containerr">
      <div className="main">
        <h1 className="bold " title="Scholarship">
          <b>SCHOLARSHIP INFORMATIONS</b>
        </h1>
        <div className="tbl">
          <h2 className="bold">INTER COLLEGE -</h2>
          <ul>
            {scholarship.map((scholarship) => {
              return (
                scholarship.type === "Inter College" && (
                  <div style={{display:"flex",flexDirection:"row"}} key={scholarship._id}  id={scholarship._id} >
                  <li >
                  <h3><Link href={`${process.env.DOMAIN}/scholarship/${scholarship.scholarship_name}`} passHref><a >{scholarship.scholarship_name}</a></Link></h3>
                  </li>
                  {isadmin&&(
                      <div style={{color:"red",fontSize:"1.5rem",paddingTop:"1rem",paddingLeft:"1.5rem",cursor:"pointer"}} onClick={()=>handleDeleteClient(scholarship._id)}><a><AiFillDelete/></a></div>
                    )}
                </div>
                )
                );
              })}
          </ul>

          <h2>INTRA COLLEGE -</h2>
          <ul>
            {scholarship.map((scholarship) => {
              return (
                scholarship.type === "Intra College" && (
                  <div style={{display:"flex",flexDirection:"row"}} key={scholarship._id}  id={scholarship._id} >
                    <li >
                      <h3><Link href={`${process.env.DOMAIN}/scholarship/${scholarship.scholarship_name}`} passHref><a >{scholarship.scholarship_name}</a></Link></h3>
                    </li>
                    {isadmin&&(
                        <div style={{color:"red",fontSize:"1.5rem",paddingTop:"1rem",paddingLeft:"1.5rem",cursor:"pointer"}} onClick={()=>handleDeleteClient(scholarship._id)}><a><AiFillDelete/></a></div>
                      )}
                  </div>
                )
                );
              })}
          </ul>
        </div>
      </div>




    </div>
    
    </>
    )}
    {!loggedIn &&  (
      <div className="body padding">    
      <div className="container">
      
        
<h1>Sorry, Your are not Logged in please login first</h1>
<div>

            <Link href={`${process.env.DOMAIN}`} passHref>
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

    <style jsx>{`
        .containerr {
          width: 100vw;
          background-color: #000080;
          background-image: url("col.jpeg");
          background-size: cover;
          background-position: top;
          background-repeat: no-repeat;
          padding: 4% 20%;
          text-align: center;
          min-height: 100vh;
        }
        .main {
          padding: 3rem;
          padding-top: 5rem;
        }
        .tbl {
          background-color: rgba(200, 200, 250, 0.8);
          border-radius: 1em;
          padding: 3% 8%;
          text-align: left;
        }
        @media screen and (max-width: 1000px) {
          .containerr {
            padding: 0;
          }
        }
        `}</style>
        </div>
  );
}

export default index;

export async function getServerSideProps(_params) {
  const { db } = await dbConnect();
  const scholarship = await Scholarship.find({}).lean();

  return {
    props: {
      scholarship: JSON.parse(JSON.stringify(scholarship)),
    },
  };
}
