import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import cookie from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({loggedIn,data}) {
  const router = useRouter();
  function onload(){
    window.location.reload(false);
  }

  return (
    <div>
      <Head>
        <title>Welcome {data.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="body">
        <ToastContainer/>
        <div className="container">
          <h1> Proud of you RKMGECian</h1>
          <ToastContainer />
          <h2>welcome to RKMGEC</h2>
          {loggedIn && (
            <>
              <h1>Welcome {data.name}!</h1>
              <button onClick={()=>{router.push("https://rkmgec.vercel.app/",toast.success("Welcome to Home Page🙏"))}}>Home Page</button>
              <button
                className="btn"
                onClick={() => {
                  cookie.remove("token");
                  // revalidate();
                  toast.info("SucessFully Loged Out 🖐️,See You");
                  setTimeout(() => {
                    router.push("https://rkmgec.vercel.app/user/login");
                  }, 1000);
                  onload()
                }}
              >
                Logout
              </button>
            </>
          )}
          {!loggedIn && (
            <>
              <h1>Sorry, Your are not Logged in please login first</h1>
              <Link href="https://rkmgec.vercel.app/user/login" passHref>
              <button className="btn" >
                  login
              </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
