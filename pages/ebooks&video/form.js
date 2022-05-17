import Head from "next/head";
import React, { useState, useEffect } from "react";
// import post from '../api/book'
import { useRouter } from "next/router";
import useSWR from "swr";
// import Image from "next/image";
import { server } from "../../next.config";
import Link from "next/link";
import styles from "../../styles/Bookform.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({ data, loggedIn }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [resource, setResource] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const data = await fetch("../api/me");
    const dt = await data.json();
    const contentType = "application/json";

    let ebookreq = {
      userId: dt.userId,
      //   name: dt.name,
      title,
      resource,
      type,
      category,
      link,
    };
    let response = await fetch("../api/books&video", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(ebookreq),
    });
    console.log(response)
    let dataa = await response.json();

    if (dataa.success) {
      setTitle("");
      setResource("");
      setType("");
      setCategory("");
      setLink("");

      toast.success(dataa.message);
      toast.info("We are reviewing your Data,Thanks 🙏")
      setTimeout(() => {
        router.push("./");
      }, 1000);
    } else {
      return toast.error(dataa.message);
    }
  };

  //   const { data } = useSWR("../api/me", async function (args) {
  //     const res = await fetch(args);
  //     return res.json();
  //   });
  //   if (!data) return <h1>Loading...</h1>;
  //   let loggedIn = false;
  //   if (data.email) {
  //     loggedIn = true;
  //   }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Resource Form</title>
      </Head>
      <div>
        <ToastContainer />
        {loggedIn && (
          <>
            <div className="body" style={{ justifyContent: "center" }}>
              <Link href="./" passHref>
                <button
                  className="btn"
                  style={{ width: `15rem`, marginLeft: `30vw ` }}
                >
                  <a>Resouces</a>
                </button>
              </Link>

              <div className="container">
                <h2>
                  Resouces Submmit
                </h2>
                <form onSubmit={handlePost} className={styles.form}>
                  <input
                    className="form-control"
                    placeholder="Title"
                    type="text"
                    required={true}
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Resource name or author name"
                    type="text"
                    required={true}
                    name="resource"
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                  />
                  <br />

                  {/* <input
                className="form-control"
                placeholder="type"
                type="text"
                required={true}
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              /> */}




                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" required={true} id="a" name="type"
                        value={type}
                        onChange={(e) => setType('programming')} />
                      <label className="label" htmlFor="a">
                        <div className="indicator"></div>
                        <span className="text">Programming</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" id="b" name="type"
                        value={type}
                        onChange={(e) => setType('core')} />
                      <label className="label" htmlFor="b">
                        <div className="indicator"></div>
                        <span className="text">Core</span>
                      </label>
                    </div>

                    <div className="wrapper">
                      <input className="state" type="radio" id="c" name="type"
                        value={type}
                        onChange={(e) => setType('ece')} />
                      <label className="label" htmlFor="c">
                        <div className="indicator"></div>
                        <span className="text">ECE</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" id="d" name="type"
                        value={type}
                        onChange={(e) => setType('cse')} />
                      <label className="label" htmlFor="d">
                        <div className="indicator"></div>
                        <span className="text">CSE</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" id="e" name="type"
                        value={type}
                        onChange={(e) => setType('ee')} />
                      <label className="label" htmlFor="e">
                        <div className="indicator"></div>
                        <span className="text">EE</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" id="f" name="type"
                        value={type}
                        onChange={(e) => setType('me')} />
                      <label className="label" htmlFor="f">
                        <div className="indicator"></div>
                        <span className="text">ME</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" id="g" name="type"
                        value={type}
                        onChange={(e) => setType('cve')} />
                      <label className="label" htmlFor="g">
                        <div className="indicator"></div>
                        <span className="text">CE</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" id="i" name="type"
                        value={type}
                        onChange={(e) => setType('others')} />
                      <label className="label" htmlFor="i">
                        <div className="indicator"></div>
                        <span className="text">Others</span>
                      </label>
                    </div>
                  </div>

                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" required={true} id="x" name="category"
                        value={category}
                        onChange={() => setCategory('video')} />
                      <label className="label" htmlFor="x">
                        <div className="indicator"></div>
                        <span className="text">Video</span>
                      </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" required={true} id="y" name="category"
                          value={category}
                          onChange={(e) => setCategory('blog')} />
                        <label className="label" htmlFor="y">
                          <div className="indicator"></div>
                          <span className="text">Blog</span>
                        </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" required={true} id="z" name="category"
                            value={category}
                            onChange={() => setCategory('ebook')} />
                          <label className="label" htmlFor="z">
                            <div className="indicator"></div>
                            <span className="text">Ebook</span>
                          </label>
                        </div>
                      </div>



                      <input
                        className="form-control"
                        placeholder="Please Provide Correct Link"
                        type="text"
                        required={true}
                        name="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
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
          </div>
      
    </div>
      );
}

      export default Form;