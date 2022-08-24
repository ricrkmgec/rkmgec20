import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getImageData, useS3Upload } from "next-s3-upload";
import Image from 'next/image';
import { TagsInput } from 'react-tag-input-component'
import "react-toastify/dist/ReactToastify.css";

function Form({loggedIn}) {
    const router = useRouter();
    const [eventName, setEventName] = useState("");
    const [type, setType] = useState("");
    const [link, setLink] = useState("");
    const [date, setDate] = useState("");
    const [file, setFile] = useState()
    let [imageUrl, setImageUrl] = useState([]);
    let [height, setHeight] = useState();
    let [width, setWidth] = useState();
    // let { uploadToS3 } = useS3Upload();
    let { FileInput, uploadToS3, files } = useS3Upload();
  
    //     const handleImage= async(e)=>{
    //       console.log(e.target.files[0])
    //       const file =e.target.files[0]
    //       // setFile(file)
    //       let { url } = await uploadToS3(file);
    // console.log(url)
    //       setImageUrl(url);
    //     }

  // typeof(date)
    const handleImage = async ({ target }) => {
      const files = Array.from(target.files);
  
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const { url } = await uploadToS3(file);
        let { height, width } = await getImageData(file);
        setWidth(width);
        setHeight(height);
        setImageUrl(current => [...current, url]);
      }
    };
  
    const handlePost = async (e) => {
      e.preventDefault();
      const data = await fetch("../api/me");
      const dt = await data.json();
      const contentType = "application/json";

    
  
      let req = {
        userId: dt.userId,
        eventName,
        type,
        link,
        date,
        imageUrl
      };
      console.log(req)
      let response = await fetch("../api/event/event", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        
        body: JSON.stringify(req),
      });
  
      let dataa = await response.json();
    
      if (dataa.success) {
        setEventName("");
        setLink("");
        setDate("");
        setFile();
        setImageUrl([]);
  
        toast.success(dataa.message);
        toast.info("We are reviewing your Data,Thanks 🙏")
        setTimeout(() => {
          router.push("./");
        }, 1000);
      } else {
        return toast.error(dataa.message);
      }
    
    };
    
    if (!loggedIn) {
      return (
        <>
          <Link href={router.push('../user/login')}>login</Link>
        </>
      )
    } else {
      return (
        <div>
          <Head>
            <meta charSet="UTF-8" />
            <title >Events Add</title>
          </Head>
          <div>
            <ToastContainer />
            {loggedIn && (
              <>
                <div className="body" style={{textAlign:'center'}}>
                  <Link href="./" passHref  >
                    <button
                      className="btn"
                      style={{ width: `10rem`, marginLeft: `5vw`,textAlign:'center' }}
                    >
                      <a>Events</a>
                    </button>
                  </Link>
  
                  <div className="container">
                    <h2>Add New Event</h2>
                    <form onSubmit={handlePost}>
  
                      <input
                        className="form-control"
                        placeholder="Name of the Event"
                        type="text"
                        required={true}
                        name="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                      />
                      <br />

                      <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" required={true} id="x" name="type"
                        value={type}
                        onChange={() => setType('Upcoming Workshops')} />
                      <label className="label" htmlFor="x">
                        <div className="indicator"></div>
                        <span className="text">Upcoming Workshops</span>
                      </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" required={true} id="y" name="type"
                          value={type}
                          onChange={(e) => setType('Projects')} />
                        <label className="label" htmlFor="y">
                          <div className="indicator"></div>
                          <span className="text">Projects</span>
                        </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" required={true} id="z" name="type"
                            value={type}
                            onChange={() => setType('Upcoming Activities')} />
                          <label className="label" htmlFor="z">
                            <div className="indicator"></div>
                            <span className="text">Upcoming Activities</span>
                          </label>
                        </div>
                      </div>
                      <br/>
  
                      <textarea
                        className="form-control"
                        placeholder="Google from link of the Event"
                        type="text"
                        required={true}
                        name="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                      />
                      <br />
  
                      <input
                        className="form-control"
                        placeholder="Last Date to Register"
                        type="date"
                        required={true}
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />

                      <div style={{ display: 'flex', flexDirection: 'row', overflow: 'scroll',marginTop:'5px' }}> {imageUrl.length !== 0 && (
                        imageUrl.map((url, index) => {
                          return (
                            <>
                              <Image width={width} height={height} style={{ margin: '5px', border: '2px solid #555555' }} src={url} alt="" key={index} />
                            </>
                          )
                        })
                      )
  
                      }
                      </div>
                      <input style={{ marginTop: '5px' }}
                        className="form-control"
                        type="file"
                        required={true}
                        placeholder="Image"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => handleImage(e)}
                      />
                      <div style={{ paddingBottom: '10px' }}>
                        {files.map((file, index) => (
                          <div key={index} style={{ color: 'limegreen' }}>
                            {file.progress !== 100 &&
                              <>File #{index} is {file.progress}% uploaded</>}
                          </div>
                        ))}
                      </div>
                      <button className="btn" type="submit">
                        Submit
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
      
  )
}
}

export default Form