import React, { useState, useEffect } from "react";
// import d from '../../public/bookbg'
import styles from "../../styles/Bookform.module.css";
import dbConnect from "../../lib/mongodb";
import Ebook from "../../models/Ebooks&video";
import axios from "axios";
import api from "../../lib/api";
import useSWR from "swr";
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcLike } from 'react-icons/fc';
import { RiVideoFill } from 'react-icons/ri';
import { FaBlog,FaFilePdf } from 'react-icons/fa';
// import audio from './public/like.mp3'
// import User from "../../models/User";
function Ebooks({ ebook, loggedIn, data }) {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState("");
  let audio1 = new Audio("/like.mp3")
  let audio2 = new Audio("/dislike.mp3")
  // let audio3 = new Audio("/dislike2.mp3")
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/`);
      setUser(res.data);
    };
  });


  const handleLikeUpdate = async (_id) => {

    try {
      await api.put(`/books&video/${_id}`,
        { likes: data.userId }
        //   }),
        // }


      ).then(response => {
        // console.log(response.data.message);
        if (response.data.success) {
          toast.success(response.data.message)
          audio1.play()
        }
        if (!response.data.success)
          toast.info(response.data.message)
        audio2.play()
      });

      // let dataa = await rese.json();
      // console.log(rese)


    } catch (error) {
      // console.log(error);
      // console.log("first")
      toast.error("something is wrong")
    }
  }




  //   const { data } = useSWR("../api/me", async function (args) {
  //     const res = await fetch(args);
  //     return res.json();
  //   });
  //   if (!data) return <h1>Loading...</h1>;
  //   let loggedIn = false;
  //   if (data.email) {
  //     loggedIn = true;
  //   }
  function onload(){
    window.location.reload(false);
  }
  function byId(b, a) {
    return parseInt(a.likes.length) - parseInt(b.likes.length)
  }

  let filt = ebook.sort(byId)
    .filter((book) => {
      if (search == "") {
        return book;
      } else if (
        book.title
          .toLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        book.resource
          .toLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        // book.contact.includes(search) ||
        book.type
          .toLowerCase()
          .includes(search.toLocaleLowerCase(), filt++)

        //    ||
        // book.session
        //   .toLowerCase()
        //   .includes(search.toLocaleLowerCase())
      ) {
        return book;
      }
      // else if(search!=book.book.toLowerCase().includes(search.toLocaleLowerCase())){
      //   return <h1>Search term not found</h1>
      // }
    });

const cat=(category)=>{
  if (category=="video") {
return <RiVideoFill style={{color:"orangered"}} title={"Video"}/> ;   
  }else if(category=="ebook") {
    return <FaFilePdf style={{color:"red"}} title={"Ebook"}/>
  }else{
    return <FaBlog style={{color:"orange"}} title={"Blog"}/>
  }
}

    var program = Object.keys(filt).map((k) => { return filt[k].type == "programming" }).indexOf(true) !== -1
  var core = Object.keys(filt).map((k) => { return filt[k].type == "core" }).indexOf(true) !== -1
  var ece = Object.keys(filt).map((k) => { return filt[k].type == "ece" }).indexOf(true) !== -1
  var cse = Object.keys(filt).map((k) => { return filt[k].type == "cse" }).indexOf(true) !== -1
  var ee = Object.keys(filt).map((k) => { return filt[k].type == "ee" }).indexOf(true) !== -1
  var me = Object.keys(filt).map((k) => { return filt[k].type == "me" }).indexOf(true) !== -1
  var ce = Object.keys(filt).map((k) => { return filt[k].type == "ce" }).indexOf(true) !== -1
  var others = Object.keys(filt).map((k) => { return filt[k].type == "others" }).indexOf(true) !== -1
  var all = Object.keys(filt).length
  return (
    <div>

      <ToastContainer />
      {loggedIn && (
        <>
          <div className={styles.body} style={{ paddingTop: `20vh` }}>

            <h1 align="center">
              {" "}
              RAMKRISHNA MAHATO GOVERNMENT ENGINEERING COLLEGE
            </h1>
            <h2 align="center">WELCOME TO DEGITAL OUR LIBRARY!</h2>
            <h3 align="center">A BOOK IS A DREAM THAT YOU HOLD IN YOUR HAND</h3>

            <div>

              <div>
                <Link href={'../ebooks&video/form'} passHref>
                  <button className="btn" style={{ width: "12rem", marginRight: "5rem" }}>Add new one</button></Link>
                <input
                  className="form-control" style={{ width: `60vw`, marginBottom: "1rem" }}
                  type="text"
                  placeholder={"Search by titles, resources or types"}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
              <div className="wrap">
                <button onClick={() => setSearch("")} className="button" id={search == "" ? "active" : "btn"}>All</button>
                <button onClick={() => setSearch("Programming")} className="button" id={search.toLocaleLowerCase() == "programming" ? "active" : ""}>Program</button>
                <button onClick={() => setSearch("Core")} className="button" id={search.toLocaleLowerCase() == "core" ? "active" : ""}>core</button>
                <button onClick={() => setSearch("Ece")} className="button" id={search.toLocaleLowerCase() == "ece" ? "active" : ""}>Ece</button>
                <button onClick={() => setSearch("cse")} className="button" id={search.toLocaleLowerCase() == "cse" ? "active" : ""}>cse</button>
                <button onClick={() => setSearch("ee")} className="button" id={search.toLocaleLowerCase() == "ee" ? "active" : ""}>ee</button>
                <button onClick={() => setSearch("me")} className="button" id={search.toLocaleLowerCase() == "me" ? "active" : ""}>me</button>
                <button onClick={() => setSearch("cve")} className="button" id={search == "ce" ? "active" : ""}>ce</button>
                <button onClick={() => setSearch("others")} className="button" id={search == "others" ? "active" : ""}>others</button>
              </div>
              {/* <button onClick={() => setSearch("Programming")} className="btn">Programming</button> */}
              {!(all||program||core||ece||cse||ee||me||ce||others) ? (<div className="" style={{ color: 'red', fontSize: '3rem', fontWeight: 'bold' }}>Nothing is found</div>) : ""}
              {/* {!all ? (<div className="" style={{ color: 'red', fontSize: '3rem', fontWeight: 'bold' }}>Nothing is found</div>) : ""} */}
              <h2 className={!program ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>Programming</h2>
              <table className="table">
                <thead className={!program ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'programming' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "} {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>
              <h2 className={!core ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>Core</h2>
     
     <table className="table">
       <thead className={!core ? "none" : ""}>
         {/* <caption>Available Books</caption> */}
         <tr>
           <>

             <th>Title</th>
             <th>Resouce Name</th>
             {/* <th></th> */}
           </>
           {/* <th>likes</th> */}
           {/* <th></th> */}
         </tr>
       </thead>
       {filt.map((book) => {
         return (
           book.isShow === true && book.type == 'core' && (

             <>
               {/* <div>{Object.keys(ebook).length}</div> */}
               <tbody>
                 <tr key={book._id}>
                   <Link href={book.link} passHref>
                     <>
                       {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                       <td data-lebel="Title">
                         <a href={book.link} target="_blank" rel="noopener noreferrer">

                         {cat(book.category)}{" "}  {book.title}
                         </a>
                       </td>
                       <td data-lebel="Resouce"> {book.resource}</td>

                       {/* <td data-lebel="session">{book.session}</td> */}
                       {/* </a> */}
                     </>
                   </Link>
                   {/* <td>

                     </td> */}
                   {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                   <div className="likes" data-lebel="likes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                     (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                   ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                 </tr>

               </tbody>
               {/* book.likes.length */}
               {/* <div>
               <h2>Book Name : </h2>
               <h4>Name : </h4>
               <p>Contact No : </p>
               <hr />
             </div> */}
               {/* while ({5>9}) {
               
                   setUserid(book.userId)
             } */}
               {/* {console.log(all)} */}
             </>
           )
         );
       })}
     </table>
              <h2 className={!ece ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>ECE</h2>
     
              <table className="table">
                <thead className={!ece ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'ece' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "}  {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>
              <h2 className={!cse ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>CSE</h2>
        
              <table className="table">
                <thead className={!cse ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'cse' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "}  {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>
              <h2 className={!ee ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>EE</h2>
             
              <table className="table">
                <thead className={!ee ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'ee' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "}  {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>
              <h2 className={!me ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>ME</h2>
          
              <table className="table">
                <thead className={!me ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'me' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "}   {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>
              <h2 className={!ce ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>CE</h2>
             
              <table className="table">
                <thead className={!ce ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'cve' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "} {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>
              <h2 className={!others ? "none" : ""} style={{ textDecoration: 'underline wavy' }}>Others</h2>

              <table className="table">
                <thead className={!others ? "none" : ""}>
                  {/* <caption>Available Books</caption> */}
                  <tr>
                    <>

                      <th>Title</th>
                      <th>Resouce Name</th>
                      {/* <th></th> */}
                    </>
                    {/* <th>likes</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                {filt.map((book) => {
                  return (
                    book.isShow === true && book.type == 'others' && (

                      <>
                        {/* <div>{Object.keys(ebook).length}</div> */}
                        <tbody>
                          <tr key={book._id}>
                            <Link href={book.link} passHref>
                              <>
                                {/* <a href={book.link}  target="_blank" rel="noreferrer"> */}
                                <td data-lebel="Title">
                                  <a href={book.link} target="_blank" rel="noopener noreferrer">

                                  {cat(book.category)}{" "} {book.title}
                                  </a>
                                </td>
                                <td data-lebel="Resouce"> {book.resource}</td>

                                {/* <td data-lebel="session">{book.session}</td> */}
                                {/* </a> */}
                              </>
                            </Link>
                            {/* <td>

                              </td> */}
                            {/* <div>{book.likes.indexOf(data.userId) !== -1 ? "ok" : "no"}</div> */}
                            <div className="likes" data-lebel="lokes" onClick={() => handleLikeUpdate(book._id)}><FcLike />{book.likes.indexOf(data.userId) !== -1 ? (" you " +

                              (book.likes.length < 2 ? "only " : "and " + (book.likes.length - 1 + " others people "))


                            ) : book.likes.length < 1 ? " No One " : (book.likes.length + " people ")}likes</div>
                          </tr>

                        </tbody>
                        {/* book.likes.length */}
                        {/* <div>
                        <h2>Book Name : </h2>
                        <h4>Name : </h4>
                        <p>Contact No : </p>
                        <hr />
                      </div> */}
                        {/* while ({5>9}) {
                        
                            setUserid(book.userId)
                      } */}
                        {/* {console.log(all)} */}
                      </>
                    )
                  );
                })}
              </table>

            </div>
          </div>

        </>
      )}
      {!loggedIn && (
        <div div className="body padding">
          <div className="container ">
            {toast.error("Please login First 🙏")}

            <div>

              <h1>Sorry, Your are not Logged in please login first</h1>
              <Link href="http://localhost:3000/user/login" passHref>
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
      <style jsx>{`
      .none{
        display:none;
      }
        h1 {
          color: blue;
        }
        h2 {
          color: blueviolet;
        }
        h3 {
          color: green;
        }
        h1 {
          font-style: oblique;
        }
        h2 {
          font-style: initial;
        }
        h3 {
          font-style: italic;
          font-size: 25px;
        }
        h4 {
          color: red;
        }
        p {
          color: green;
        }
        li {
          diaplay: inline-block;
          list-style: none;
        }





//button seach style
.wrap {
  padding-left:1rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  // flex-direction:column
  overflow-x:scroll;
  overflow-y:none;
}

.button {
  // flex:3 3 2rem ;
  margin:0 1rem;
  min-width: 100px;
  height: 35px;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

#active{
  color:white;
  border: 2px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  width: calc(100px);
  min-height: calc(30px );
}

.button::before  {
content: '';
  border-radius: 50px;
  min-width: calc(100px + 12px);
  min-height: calc(30px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

.button:hover::before, .button:focus::before {
  opacity: 1;
}

.button::after {
  content: '';
  width: 70px; height: 70px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // animation: 1.5s infinite;
  animation: ring ease-in-out 1s infinite   ;
}

.button:hover::after, .button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}


      
      `}</style>
    </div>
  );
}
export default Ebooks;

export async function getServerSideProps(params) {
  const { db } = await dbConnect();
  const ebook = await Ebook.find({}).lean();
  // const user = await User.findById(params.userId).lean();

  return {
    props: {
      ebook: JSON.parse(JSON.stringify(ebook)),
      // user: JSON.parse(JSON.stringify(user)),
    },
  };
}
