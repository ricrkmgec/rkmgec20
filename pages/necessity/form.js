import React,{useState} from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getImageData, useS3Upload} from "next-s3-upload";
import Image from 'next/image';
function Form({loggedIn,data}) {
    const router = useRouter();
    const [product_name, setProduct_name] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState("");
    const [contact, setContact] = useState("");
    const [file, setFile] = useState()
    let [imageUrl, setImageUrl] = useState([]);
    let [height, setHeight] = useState();
    let [width, setWidth] = useState();
    // let { uploadToS3 } = useS3Upload();
    let {FileInput, uploadToS3, files } = useS3Upload();

//     const handleImage= async(e)=>{
//       console.log(e.target.files[0])
//       const file =e.target.files[0]
//       // setFile(file)
//       let { url } = await uploadToS3(file);
// console.log(url)
//       setImageUrl(url);
//     }

    const handleImage = async ({ target }) => {
      const files = Array.from(target.files);
  
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const { url } = await uploadToS3(file);
        let { height, width } = await getImageData(file);
        setWidth(width);
        setHeight(height);
        setImageUrl(current => [...current,url]);
      }
    };

    const handlePost = async (e) => {
      e.preventDefault();
      const data = await fetch("../api/me");
      const dt = await data.json();
      const contentType = "application/json";
  
      let req = {
        userId: dt.userId,
        product_name,
        details,
        price,
        contact,
        imageUrl
      };
      let response = await fetch("../api/necessity/ncs", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(req),
      });
  
      let dataa = await response.json();
  
      if (dataa.success) {
        setProduct_name("");
        setDetails("");
        setPrice("");
        setContact("");
        setFile();
        setImageUrl([]);
  
        toast.success(dataa.message);
        toast.info("We are reviewing your Data,Thanks 🙏")
        // setTimeout(() => {
        //   router.push("/");
        // }, 1000);
      } else {
        return toast.error(dataa.message);
      }
    };
    // const router=useRouter()
    if (!loggedIn) {
      return (
        <>
        <Link href={router.push('../user/login')}>login</Link>
        </>
      )
    }else{
    return (
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <title>Necessity Form</title>
        </Head>
  <div>
          <ToastContainer />
          {loggedIn && (
          <>
          <div className="body">
            <Link href="./" passHref>
              <button
                className="btn"
                style={{ width: `90vw`, marginLeft: `5vw` }}
              >
                <a>Necessity</a>
              </button>
            </Link>
  
            <div className="container">
              <h2>Sell Your Things</h2>
              <form onSubmit={handlePost}>
                <input
                  className="form-control"
                  placeholder="Name of the selling products"
                  type="text"
                  required={true}
                  name="product_name"
                  value={product_name}
                  onChange={(e) => setProduct_name(e.target.value)}
                />
                <br />
                <textarea
                  className="form-control"
                  placeholder="Details of your Product"
                  type="text"
                  required={true}
                  name="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <br />
  
                <input
                  className="form-control"
                  placeholder="Approximate Price of your Product"
                  type="number"
                  required={true}
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  className="form-control"
                  placeholder="Contact Number"
                  type="text"
                  required={true}
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                  <div style={{display:'flex',flexDirection:'row',overflow:'scroll'}}> {imageUrl.length!==0 &&(
                  imageUrl.map((url,index)=>{
                    return(
                    <>
                    <Image width={100} height={100} style={{height:'200px',margin:'5px',border:'2px solid #555555'}} src={url} alt="" key={index} />
                    </>
                    )
                  })
                  )
                  
                }
                </div>
                <input
                  className="form-control"
                  type="file"
                  required={true}
                  placeholder="Image"
            accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => handleImage(e)}
                />
                 <div style={{paddingBottom:'10px'}}>
        {files.map((file, index) => (
          <div key={index} style={{color:'limegreen'}}>
            {file.progress!==100&&
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
  <Link href='/' passHref><button className="btn" onClick={()=>toast.info("Welcome to Home Page")}>
              Homepage
            </button>
            </Link>
  
  </div>
              </div>
          </div>
        )}
        </div>
        
      </div>
    )}
}

export default Form