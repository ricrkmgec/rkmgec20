import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { DynamicRoutes } from "next/dist/server/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RKMGEC</title>
        <meta name="description" content="Ramkrishna Mahato Government Engineering College" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.section}><div className={styles.titlename}><span className={styles.span}></span></div></div>
      </div>
      <ToastContainer />
      <section className={styles.sectionbox} >

        <div className={styles.notifibar}>
          <div className={styles.notifibox}>
            <li>
              <a>NEW NOTIFICATIONS </a>
            </li>
          </div>
        </div>

        <div className={styles.boxcontainer} style={{ justifyContent: 'center' }}>
          <Link href="./book/form" passHref>
            <a>
              <div className={styles.box}>
                <Image
                  className={styles.img}
                  src="/bookicon.png"
                  alt=""
                  height={200}
                  width={200}
                />
                <div className={styles.content}>
                  <h3 className={styles.h3}> Materials</h3>
                  <h6 className={styles.p}>
                    Here you can sell/buy/donate your books.
                  </h6>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <div className={styles.box}>
                <Image
                  className={styles.img}
                  src="/gateicon.jpeg"
                  alt=""
                  height={180}
                  width={200}
                />
                <div className={styles.content}>
                  <h3 className={styles.h3}> Gate & Placement Related Tips</h3>
                  <h6 className={styles.p}>
                    Suggestions & notes form senior students of our college.
                  </h6>
                </div>
              </div>
            </a>
          </Link>
          <Link href="./ebooks&video" passHref>
            <a>
              <div className={styles.box}>
                <Image
                  className={styles.img}
                  src="/ebookicon.jpg"
                  alt=""
                  height={200}
                  width={200}
                />
                <div className={styles.content}>
                  <h3 className={styles.h3}>E-Book & Video Lectures </h3>
                  <h6 className={styles.p}>
                    Google Drive link /Private Youtube Video Link.
                  </h6>
                </div>
              </div>
            </a>
          </Link>
          <Link href="./scholarship" passHref>
            <a>
              <div className={styles.box}>
                <Image
                  className={styles.img}
                  src="/scholarshipicon.jpg"
                  alt=""
                  height={200}
                  width={200}
                />
                <div className={styles.content}>
                  <h3 className={styles.h3}>Scholarships </h3>
                  <h6 className={styles.p}>
                    Only Different Scholarship names and links are avilable.
                  </h6>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <div className={styles.box}>
                <Image
                  className={styles.img}
                  src="/internicon2.png"
                  alt=""
                  height={200}
                  width={200}
                />
                <div className={styles.content}>
                  <h3 className={styles.h3}> Internships & Workshops </h3>
                  <h6 className={styles.p}>
                    List of some Internships and Workshops.
                  </h6>
                </div>
              </div>
            </a>
          </Link>
          <Link href="./necessity" passHref>
            <a>
              <div className={styles.box}>
                <Image
                  className={styles.img}
                  src="/drawicon.png"
                  alt=""
                  height={200}
                  width={200}
                />
                <div className={styles.content}>
                  <h3 className={styles.h3}>Student Necessities</h3>
                  <h6 className={styles.p}>
                    Drawing kits/Aprons(from seniors),Book/Book-Photocopy shops(in Purulia).
                  </h6>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
