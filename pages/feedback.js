import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Bookform.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({ data, loggedIn }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [feedback, setFeedback] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const data = await fetch("./api/me");
    const dt = await data.json();
    const contentType = "application/json";

    let ebookreq = {
      userId: dt.userId,
      name,
      email,
      contact,
      category,
      feedback,
    };
    let response = await fetch("./api/feedback", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(ebookreq),
    });
    let dataa = await response.json();

    if (dataa.success) {
      setName("");
      setEmail("");
      setContact("");
      setCategory("");
      setFeedback("");
      toast.success(dataa.message);
      setTimeout(() => {
        router.push("./");
      }, 2000);
    } else {
      return toast.error(dataa.message);
    }
  };
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Feedback</title>
      </Head>
      <div>
        <ToastContainer />
        {loggedIn && (
          <>
            <div className="body" style={{ justifyContent: "center" }}>

              <div className="container">
                <h2>
                  Feedback
                </h2>
                <form onSubmit={handlePost} className={styles.form}>
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    required={true}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    required={true}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Contact Number"
                    type="number"
                    required={true}
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <br />

                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" required={true} id="x" name="category"
                        value={category}
                        onChange={() => setCategory('suggestion')} />
                      <label className="label" htmlFor="x">
                        <div className="indicator"></div>
                        <span className="text">Suggestion</span>
                      </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" required={true} id="y" name="category"
                          value={category}
                          onChange={(e) => setCategory('error')} />
                        <label className="label" htmlFor="y">
                          <div className="indicator"></div>
                          <span className="text">Error</span>
                        </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" required={true} id="z" name="category"
                            value={category}
                            onChange={() => setCategory('others')} />
                          <label className="label" htmlFor="z">
                            <div className="indicator"></div>
                            <span className="text">Others</span>
                          </label>
                        </div>
                      </div>



                      <textarea style={{height:'20vh'}}
                        className="form-control"
                        placeholder="Elaborate your Feddback"
                        type="text"
                        required={true}
                        name="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                      <button className="btn" type="submit">
                        Submit Feedback
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