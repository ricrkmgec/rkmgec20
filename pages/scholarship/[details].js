import React, { useState, useEffect } from "react";
import { AiFillDelete } from 'react-icons/ai';
// import dbConnect from "../../lib/mongodb";
import Scholarship from "../../models/Scholarship";
import Link from "next/link";
import api from "../../lib/api"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Details({ scholarship, loggedIn,data }) {

  const handleDeleteClient = async (_id) => {

    try {
      await api.delete(`/scholarship/${_id}`);
      // toast({
      toast.warn("sucessfully Deleted")
      var element = document.getElementById(_id);
     await element.remove();
    } catch (error) {
      toast.error("Something is wrong")
    }
  };

let isadmin=false;
if (data.admin == true) {
  isadmin = true;
}
console.log(scholarship[0]._id)
  return (
    <div>
<ToastContainer/>
       {loggedIn && (
         <> 
    <div className="containerr">
      <div className="main">
        <h1 className="bold " title="Scholarship">
          <b>{scholarship[0].scholarship_name}</b>
        </h1>
        <div className="tbl">
        <p style={{fontSize:"1.5rem"}}>{scholarship[0].details}</p>
        <Link href={scholarship[0].link} ><a style={{fontSize:"2rem",fontWeight:"bold",color:"green"}}>Apply</a></Link>
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

            <Link href="https://rkmgec.vercel.app/user/login" passHref>
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
          background-image: url("https://rkmgec.vercel.app/col.jpeg");
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

export default Details;

export async function getServerSideProps(query) {
    const details = query.query.details;
    console.log(details)
    const scholarship = await Scholarship.find({scholarship_name:details}).lean();
    return {
        props: {
          scholarship: JSON.parse(JSON.stringify(scholarship)),
        },
      };
  }