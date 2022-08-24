import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import styles from "../../styles/Bookform.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const router = useRouter();
  const [book_title, setBook_title] = useState("");
  const [author, setAuthor] = useState("");
  const [contact, setContact] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const data = await fetch("../api/me");
    const dt = await data.json();
    const contentType = "application/json";

    let bookreq = {
      userId: dt.userId,
      name: dt.name,
      session: dt.session,
      book_title,
      author,
      contact,
    };
    let response = await fetch("../api/book/book", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(bookreq),
    });

    let dataa = await response.json();

    if (dataa.success) {
      setBook_title("");
      setAuthor("");
      setContact("");

      toast.success(dataa.message);
      toast.info("We are reviewing your Data,Thanks 🙏")
      setTimeout(() => {
        router.push("./availablebooks");
      }, 1000);
    } else {
      return toast.error(dataa.message);
    }
  };

  const { data } = useSWR("../api/me", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Required Books Form</title>
      </Head>
      <div>
        <ToastContainer />
        {loggedIn && (
          <>
            <div className="body">
              <Link href="./availablebooks" passHref>
                <button
                  className="btn"
                  style={{ width: `90vw`, marginLeft: `5vw` }}
                >
                  <a>Requesting Books</a>
                </button>
              </Link>

              <div className="container">
                <h2>Book Submittng</h2>
                <form onSubmit={handlePost} className={styles.form}>
                  <input
                    className="form-control"
                    placeholder="Book Title"
                    type="text"
                    required={true}
                    name="book_title"
                    value={book_title}
                    onChange={(e) => setBook_title(e.target.value)}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Author"
                    type="text"
                    required={true}
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <br />

                  <input
                    className="form-control"
                    placeholder="Contact Number"
                    type="text"
                    required={true}
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <button className="btn" type="submit">
                    Request Book
                  </button>
                  <br />
                </form>
              </div>
            </div>
          </>
        )}
        {!loggedIn && (
          <div className="body padding">
            <div className="container">
              {toast.error("Please login First 🙏")}

              <h1>Sorry, Your are not Logged in please login first</h1>
              <div>

                <Link href={`${process.env.DOMAIN}/user/login`} passHref>
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
      </div>

    </div>
  );
}

export default Form;
