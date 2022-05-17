import { useRouter } from 'next/router';
import Link from 'next/link'
import React from "react";

function Admin({ loggedIn, data }) {
  const router = useRouter()
  let isadmin = false;
  if (data.admin == true) {
    isadmin = true;
  }

  return (
    <div className='body' style={{ paddingTop: `22vh`, textAlign: `center` }}>
      {loggedIn && isadmin && (
        <div div className='container'>
          <h1 >Welcome {data.name}!!!</h1><h3>you are an ADMIN of RKMGEC</h3>

          <Link href={"../admin/booksUpdate"} passHref><div className='btn'><h2>Book update</h2></div></Link>
          <Link href={"../admin/ebookUpdate"} passHref><div className='btn'><h2>Ebook and video update</h2></div></Link>
          <Link href={"../admin/scholarshipUpdate"} passHref><div className='btn'><h2>Schalarship update</h2></div></Link>
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
       
      `}</style>
    </div>
  );
}
export default Admin;
