import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Bookform.module.css";
import dbConnect from "../../lib/mongodb";
import Books from "../../models/Books";
import User from "../../models/User";
import _ from "lodash"
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
function Availablebooks({ books, loggedIn }) {
  const [search, setSearch] = useState("");
  const [setNum, setSetNum] = useState(1)
  const router = useRouter();

  const handleReadMore = () => { setSetNum(pre => pre + 10) }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Books</title>
      </Head>
      <ToastContainer />
      {loggedIn && (
        <>
          <div className={styles.body} style={{ paddingTop: `20vh` }}>

            <h1 align="center">
              {" "}
              RAMKRISHNA MAHATO GOVERNMENT ENGINEERING COLLEGE
            </h1>
            <h2 align="center">WELCOME TO OUR LIBRARY!</h2>
            <h3 align="center">A BOOK IS A DREAM THAT YOU HOLD IN YOUR HAND</h3>

            <div>
              <input
                className="form-control" style={{ width: `90vw` }}
                type="text"
                placeholder="search..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

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
                        .includes(search.toLocaleLowerCase()) ||
                      book.name
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return book;

                    }
                  }).slice(0, setNum)

                  .map((book, index) => {
                    return (

                      book.isShow === true && (
                        <>
                          <tbody>
                            <tr key={index}>
                              <td data-lebel="Book">{book.book_title}</td>
                              <td data-lebel="author"> {book.author}</td>
                              <td data-lebel="contact">{book.contact}</td>
                              <td data-lebel="name">{book.name}</td>
                              <td data-lebel="session">{book.session}</td>
                            </tr>
                          </tbody>
                        </>
                      )
                    );
                  })}
              </table>
              <div>
                <button style={{ width: '10rem' }} onClick={handleReadMore} className="btn">Load More</button>
              </div>
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
      
      `}</style>
    </div>
  );
}
export default Availablebooks;

export async function getServerSideProps() {
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
      books: JSON.parse(JSON.stringify(arr.reverse())),
    },
  };
}
