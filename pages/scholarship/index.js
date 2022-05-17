import React, { useState, useEffect } from "react";
// import d from '../../public/bookbg'
import dbConnect from "../../lib/mongodb";
import Scholarship from "../../models//Scholarship";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import auth from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function index({ scholarship, loggedIn }) {
  // auth(req, res)
  // const token = req.headers["  x-auth-token"];
  // console.log(token)
  // const data =  fetch("../api/me");


  return (
    <div>

       {loggedIn && (
         <> 
    <div className="containerr">
      <div className="main">
        {/* style={justify-content: center;} */}
        <h1 className="bold " title="Scholarship">
          <b>SCHOLARSHIP INFORMATIONS</b>
        </h1>
        <div className="tbl">
          <h2 className="bold">INTER COLLEGE -</h2>
          <ul>
            {scholarship.map((scholarship) => {
              return (
                scholarship.type === "Inter College" && (
                  <>
                    <li key={scholarship._id}>
                      <h3>{scholarship.scholarship_name}</h3>
                    </li>
                  </>
                )
                );
              })}
          </ul>

          <h2>INTRA COLLEGE -</h2>
          <ul>
            {scholarship.map((scholarship) => {
              return (
                scholarship.type === "Intra College" && (
                  <>
                    <li key={scholarship._id}>
                      <h3>{scholarship.scholarship_name}</h3>
                    </li>
                  </>
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
  // const user = await User.findById(params.userId).lean();
  // pet._id = pet._id.toString()
  // const books = await db
  //   .collection("books")
  //   .find({})
  //   .sort({ metacritic: -1 })
  //   .limit(20)
  //   .toArray();

  return {
    props: {
      scholarship: JSON.parse(JSON.stringify(scholarship)),
      // user: JSON.parse(JSON.stringify(user)),
    },
  };
}
