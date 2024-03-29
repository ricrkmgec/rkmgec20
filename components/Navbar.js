import { React, useState, useEffect,useRef } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
function Navbar({ data }) {
  const [open, setOpen] = useState(false);
const btnref=useRef();
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
const DOMAIN=process.env.DOMAIN;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
useEffect(() => {
const closes=e=>{
  if(e.path[3].className.split(" ")[0]!=="jsx-b3e1b6a7c9b96113"){
    setOpen(false);
  }
}  
document.body.addEventListener('click',closes)
  return () => {
    document.body.addEventListener('click',closes)
  }
}, [])

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
 

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 80;

    if (backgroundTransparacyVar < 2) {
      let paddingVar = 30 - backgroundTransparacyVar * 90;
      let boxShadowVar = backgroundTransparacyVar * 5;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  let admin = false;
  if (data.admin) {
    admin = true;
  }
  

  return (
    <div className={styles.navbarmain}>

      <div
        className={styles.nav}
        style={{
          background: `rgba(110, 89, 25, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(255 255 255 / ${boxShadow}) 0px 0px 20px 6px`,
          // borderBottom:`1px solid red`,
        }}
      >
        <div className={styles.logo} ><Link href={`${DOMAIN}`} passHref><a><span className={styles.r}>R</span>KMGEC</a></Link></div>

        <div ref={btnref}
          className={open === false ? styles.menubar : styles.close}
          onClick={() => setOpen(!open)}
        >
          <div
            className={
              open === false
                ? styles.menuicons
                : styles.menuicons + " " + styles.active
            }
          ></div>
          <div
            className={
              open === false
                ? styles.menuicons
                : styles.menuicons + " " + styles.active
            }
          ></div>
          <div
            className={
              open === false
                ? styles.menuicons
                : styles.menuicons + " " + styles.active
            }
          ></div>
        </div>
        <div
          className={
            open === false ? styles.navbar : styles.navbar + " " + styles.active
          }
          // className={styles.navbar} 
          id='navbox'
        >
          <ul className={styles.ul}>
            <Link href="/"><a><li className={styles.li}>Home</li></a></Link>
            <Link href={`${DOMAIN}/aboutus`}><a><li className={styles.li}>about</li></a></Link>
            <Link href={`${DOMAIN}/events`}><a><li className={styles.li}> events</li></a></Link>
            <Link href={`${DOMAIN}/feedback`}><a><li className={styles.li}>Feedback</li></a></Link>
            <Link href={`${DOMAIN}/contactus`}><a><li className={styles.li}>Contacts</li></a></Link>
            {!loggedIn && (
              <Link href={`${DOMAIN}/user/login`}><a><li className={styles.li}>
                login </li></a>
              </Link>
            )}
            {loggedIn && (
              <Link href={`${DOMAIN}/user/login`}><a><li className={styles.li}>{data.name.split(" ")[0]}</li></a>
              </Link>
            )}


            {admin && (
              <Link href={`${DOMAIN}/admin`}><a><li className={styles.li}>
                Admin</li></a>
              </Link>
            )}

          </ul>
        </div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}

export default Navbar;
export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const article = await getArticleFromAPI()
  return {
    props: {
      fallback: {
        '/api/article': article
      }
    }
  }
}

