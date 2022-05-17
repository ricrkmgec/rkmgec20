import { AiFillDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

import React, { useState, useEffect } from "react";
// import d from '../../public/bookbg'
import styles from "../../styles/Bookform.module.css";
import useSWR from "swr";
import dbConnect from "../../lib/mongodb";
import Books from "../../models/Books";
import axios from "axios";
import api from "../../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookUpdate({ books,loggedIn,data }) {
  const [search, setSearch] = useState("");
  const [userr, setUserr] = useState([]);
  const [isShow, setIsShow] = useState(true)
  const [userid, setUserid] = useState();
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`user/${userid}`);
  //     setUser(res.data);
  //   };
  // });
  /* this is an example for new snippet extension make by me xD */



  const getusername = async (userid) => {


     await setUserid(userid)
    //  await console.log(userid)

  };
  useEffect((userid) => {
    
    axios.get(`../api/user/6259b1d162a845217bdbb6dd`).then(({ data }) => {
console.log(data.data)
        // setUserr(data);
      //  res.status(200).json(data.data)
      }).catch(error=>{
        console.log(error)
      })  
  })



  const handleUpdateClient = async (_id) => {

    try {
      await api.put(`/book/${_id}`, { isShow });
      // setIsShow(true);
      toast.success("sucessfully update")
      var element = document.getElementById("tr");
      await element.remove();
      // console.log("sucessfully update")    
    } catch (error) {
      // console.log(error);
      toast.error("something is wrong")
    }
  }



  const handleDeleteClient = async (_id) => {

    try {
      await api.delete(`/book/${_id}`);
      // toast({
      toast.warn("sucessfully Deleted")
      var element = document.getElementById("tr");
     await element.remove();

      // console.log(_id)
      //   title: "Deletado com sucesso!!",
      //   status: "info",
      //   duration: 9000,
      //   isClosable: true,
      // });
    } catch (error) {
      // console.log(error);
      toast.error("Something is wrong")
    }
  };


  // const { data } = useSWR("/api/me", async function (args) {
  //   const res = await fetch(args);
  //   return res.json();
  // });
  // // console.log(data);
  // if (!data) return <h1>Loading...</h1>;
  // let loggedIn = false;
  let isadmin = false;
  // if (!data.email == "") {
  //   loggedIn = true;
  // }
  if (data.admin == true) {
    isadmin = true;
  }

  return (
    <div >
      <ToastContainer />
      {loggedIn && isadmin && (
        <div className={styles.body} style={{ paddingTop: `22vh` }}>
          <div>
            <input
              className="form-control" style={{ width: `90vw` }}
              type="text"
              placeholder="search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <h1>Available Book</h1>
            <table className="table">
          
              <thead>

                <tr>
                  <th>Book Title</th>
                  <th>Auther</th>
                  <th>Contact No</th>
                  <th>Name</th>
                  <th>Session</th>
                </tr>
              
              </thead>
              {/* {user.map((user, index) => (
                <li key={index}>
                  {user._id}
                  </li>))} */}
              {/* {console.log(userid)} */}
              {/* {console.log(userr)} */}
              {/* {user.map((ur)=>{return(<>
                {ur.name}</>
              )})} */}
              {/* {data.map(boo)=>{return({boo.data})}} */}
              
              {books
                .filter((book) => {
                  if (search == "") {
                    return book;
                  } else if (
                    book.book_title
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    book.author
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())
                    // ||
                    // book.contact
                    //   .toLowerCase()
                    //   .includes(search.toLocaleLowerCase())
                  ) {
                    return book;
                  }
                  // else if(search!=book.book.toLowerCase().includes(search.toLocaleLowerCase())){
                  //   return <h1>Search term not found</h1>
                  // }
                })
                .map((book) => {
                  return (
                    book.isShow === false && (
                      <>
                        {/* <li key={book._id}> */}
                        <tbody>
                         
                     
                       
                          <tr key={book._id} id='tr'>
                            <td data-lebel='Book'>{book.book_title}</td>
                            <td data-lebel='author'> {book.author}</td>
                            <td data-lebel='contact'>{book.contact}</td>
                            <td data-lebel='name'>{book.name}</td>
                            <td data-lebel='session'>{book.session}</td>

                            <td className='updateAndDelete' >
                              <div className="btngreen" onClick={() => handleUpdateClient(book._id)}><TiTick /></div>

                
                             
                              {/* </td>
                            <td> */}
                              <div className="btnred" onClick={() => handleDeleteClient(book._id)}><AiFillDelete /></div>
                            </td>

                          </tr>
                          {/* {setUserid(book.userId)} */}
                          {() => getusername(book.userId)}
                          {console.log(userid)}
                          {/* <button className="button bggreen"  onClick={()=>getusername(book.userId)}>apprggjjhove</button> */}


                          {/* {data.data} */}
                          {/* console.log({book.userId}) */}
                          {/* {(book)=>setUserid(book.userId)} */}
                          {/* setUserid({book.userId}); */}
                          {/* <h2>Book Name : {book.book_title}</h2>
                            <h4>Name : {book.author}</h4>
                            <p>Contact No : {book.contact}</p> */}

                          {/* <hr /> */}
                        </tbody>


                      </>
                    )
                  );
                })}
            </table>
            {/* {console.log({user})} */}
          </div>
        </div>
      )}
      <div className="body" style={{ paddingTop: `22vh`, textAlign: `center` }}>



        {!loggedIn && (
          <>
            <h1>Sorry You are not loggedin !!!</h1>
          </>
        )}

        {loggedIn && (
          <>
            {!isadmin && (
              <>
                <h1>Sorry You are not an Admin !!!</h1>
              </>
            )}
          </>
        )}
      </div>
      <style jsx>{`
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
        .updateAndDelete{
          display:flex;
          padding-left:1rem;
          justify-content:space-around;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(_params) {
  const { db } = await dbConnect();
  const books = await Books.find({}).lean();
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
      books: JSON.parse(JSON.stringify(books)),
      // user: JSON.parse(JSON.stringify(user)),
    },
  };
}
