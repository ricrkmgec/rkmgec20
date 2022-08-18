import { AiFillDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

import React, { useState } from "react";
import styles from "../../styles/Bookform.module.css";
import _ from "lodash"
import dbConnect from "../../lib/mongodb";
import Books from "../../models/Books";
import User from "../../models/User";
import axios from "axios";
import api from "../../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';

export default function BookUpdate({ books,loggedIn,data }) {
  const [search, setSearch] = useState("");

  const handleUpdateClient = async (_id) => {
    try {
      await api.put(`/book/${_id}`);
      toast.success("sucessfully update")
      var element = document.getElementById("tr");
      await element.remove();
    } catch (error) {
      toast.error("something is wrong")
    }
  }

  const handleDeleteClient = async (_id) => {
    try {
      await api.delete(`/book/${_id}`);
      toast.warn("sucessfully Deleted")
      var element = document.getElementById("tr");
     await element.remove();
    } catch (error) {
      toast.error("Something is wrong")
    }
  };
  let isadmin = false;

  if (data.admin == true) {
    isadmin = true;
  }

  return (
    <div >
        <Head>
        <meta charSet="UTF-8" />
        <title>Book Update</title>
      </Head>
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
                .map((book,index) => {
                  return (
                    book.isShow === false && (
                      <>
                        {/* <li key={book._id}> */}
                        <tbody>
                          <tr key={index} id='tr'>
                            <td data-lebel='Book'>{book.book_title}</td>
                            <td data-lebel='author'> {book.author}</td>
                            <td data-lebel='contact'>{book.contact}</td>
                            <td data-lebel='name'>{book.name}</td>
                            <td data-lebel='session'>{book.session}</td>

                            <td className='updateAndDelete' >
                              <div className="btngreen" onClick={() => handleUpdateClient(book._id)}><TiTick /></div>
                              <div className="btnred" onClick={() => handleDeleteClient(book._id)}><AiFillDelete /></div>
                            </td>

                          </tr>
                        </tbody>


                      </>
                    )
                  );
                })}
            </table>
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
  let bk = await Books.find({})
  let arr = []
  for (var i = 0; i < bk.length; i++) {
    let id = bk[i].userId
    let user = await User.findOne({ _id: id });
    let merge = _.merge(user, bk[i], bk[i].userId);
    arr.push(merge)
  }

  return {
    props: {
      books: JSON.parse(JSON.stringify(arr)),
    },
  };
}
