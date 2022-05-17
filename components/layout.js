import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children,data }) {
  return (
    <>
      <Navbar data={data} />
      <main>{children}</main>
      <Footer/>
      <style jsx>{`
      main{min-height:60vh;
        // max-width: 100px;
    }
      `}</style>
    </>
  )
}