import Head from 'next/head'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function index() {
    return (
        <div>
            <Head>       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            
            </Head>
        <header>
          <div classname="p-1" id="topheader">
            <div classname="container">
              <div classname="row">
                <div classname="col-12 text-right">
                  <a classname="p-1" href="tel:8420490636"><i classname="fas fa-phone" />+(91)8420490636</a>
                  <a classname="p-1" href="mailto:abc@gmail.com"><i classname="fas fa-envelope" />abc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div id="bottomhader">
            <div classname="container-fluid">
              <nav classname="navbar navbar-dark navbar-expand-md" style={{backgroundColor: '#004d80'}}>
                <a classname="navbar-brand" href>
                  <img src="      " width="250px" alt="" />
                </a>
                <button data-toggle="collapse" data-target="#navbarToggler" type="button" classname="navbar-toggler"><span classname="navbar-toggler-icon" /></button>
                <div classname="collapse navbar-collapse" id="navbarToggler">
                  <ul classname="navbar-nav">
                    <li classname="nav-item active">
                      <a classname="nav-link" href="#">Home</a>
                    </li>
                    <li classname="nav-item dropdown">
                      <a classname="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Services</a>
                      <div classname="dropdown-menu">
                        <a classname="drowpdown item" href="#">web desigining</a>
                        <a classname="drowpdown item" href="#">dgfjhjhj</a>
                        <a classname="drowpdown item" href="#">web desigining</a>
                        <a classname="drowpdown item" href="#">web desigining</a>
                        <div classname="drowpdown-divider" />
                        <a classname="drowpdown item" href="#">web desigining</a>
                      </div>
                    </li>
                    <li classname="nav-item">
                      <a classname="nav-link" href="protfolio.html">Portfolio</a>
                    </li>
                    <li classname="nav-item">
                      <a classname="nav-link" href="about us.html">About us</a>
                    </li>
                    <li classname="nav-item">
                      <a classname="nav-link" href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {'{'}/* {/*Start:Home page first hero section*/} */{'}'}
        <section classname="top-hero-section pt-4 pb-5">
          <div classname="container">
            <div classname="row align-item-center">
              <div classname="col-md-5">
                <h4>INTERVIEW EXPERIENCE</h4> 
                <h5>PLACEMENTS &amp; INTERNSHIPS</h5><br />
                <button style={{color: '#fff', backgroundColor: '#004d80'}} classname="btn btn-lg">Get started</button><a classname="nav-link" href="query.php">Read more...</a>
              </div>
              <div classname="col-md-7">
                <img classname="img-fluid" src="design.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {'{'}/* {/*End:Home page last hero section*/} */{'}'}
        <section classname="pt-3 pb-4">
          <div classname="container">
            <div classname="row">
              <div classname="col-md-12 text-center">
                <h3>
                  Lots of IT companies in town.Why you should choose you?
                </h3>
                <hr />
              </div>
            </div>
            <div classname="row">
              <div classname="col-md-4 text-center">
                <img classname="img-fluid qualities-img p-5" src alt="" />
                <h5>TECHNICAL SKILLS</h5> 
                <p>The obvious skills requirements to land a job in software companies are technical</p>
              </div>
              <div classname="col-md-4 text-center">
                <img classname="img-fluid qualities-img p-5" src alt="" />
                <h5>SOFT SKILLS</h5> 
                <p>While applying for jobs in IT will definitely require sound technical knowledge, job seekers shouldn’t ignore their soft skills either.</p>
              </div>
              <div classname="col-md-4 text-center">
                <img classname="img-fluid qualities-img p-5" src alt="" />
                <h5>CARRER DEVELOPEMENT</h5> 
                <p>Another set of skills needed to get placed in software companies is in regard to career development and advancement</p>
              </div>
            </div>
            <div classname="row">
              <div classname="col-md-4 text-center">
                <img classname="img-fluid qualities-img p-5" src alt="" />
                <h5>ADVANCEMENT SKILLS </h5> 
                <p>Almost no successful job search, whether it’s in the tech industry or otherwise, is possible without these skills.</p>
              </div>
              <div classname="col-md-4 text-center">
                <img classname="img-fluid qualities-img p-5" src alt="" />
                <h5>MANAGEMENT SKILLS</h5> 
                <p>Also very important </p>
              </div>
              <div classname="col-md-4 text-center">
                <img classname="img-fluid qualities-img p-5" src alt="" />
                <h5>STRATEGIC THINKING SKILLS</h5> 
                <p>An important skills</p>
              </div>
            </div>
          </div>
        </section>
        <section classname="requirements-section pt-1 pb-1 pt-md-3 pb-md-3">
          <div classname="container">
            <div classname="row text-align center">
              <div classname=" text-center col-md-9">
                <h3>Do you have any requirements?We can do it for you!</h3>
              </div>
              <div classname=" text-center col-md-3">
                <a classname="nav-link" href="experience.php">Get started</a>
              </div>
            </div>
          </div>
        </section>
        {'{'}/* <section> */{'}'}
          <section classname=" p-2pt-md-4 pb-md-4">
            <div classname="container">
              <div classname="row text-align center">
                <div classname="col-md-6">
                  <h3>About RIC</h3>
                  <p>RKMGEC</p>
                  <a href="https://ricrkmgec.pythonanywhere.com/">READ MORE</a>
                </div>
                <div classname="col-md-6">
                  <img classname="img-fluid p-2" src=" " alt="" />
                </div>
              </div>
            </div>
          </section>
          <section classname="home-newsletter p-2 pt-md-4 pb-md-4">
            <div classname="row">
              <div classname="col-12 text-center">
                <h3>Subscribe our news letter
                </h3>
                <div classname="input-group 
          pb-3">
                  <input type="email" classname="form-control" placeholder="Enter your email" />
                  <span classname="input-group-btn">
                    <button classname="btn btn-theme" type="submit">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section classname="pt-3 pb-4">
            <div classname="container">
              <div classname="row">
                <div classname="col-md-12 text-center">
                  <h3>
                    Lots of IT companies in town.Why you should choose you?
                  </h3>
                  <hr />
                </div>
              </div>
              <div classname="row">
                <div classname="col-md-4 text-center">
                  <img classname="img-fluid qualities-img p-5" src alt="" />
                  <h5>TCS</h5> 
                  <p>my name isnghjhjyhjghgghghjghjjg</p>
                </div>
                <div classname="col-md-4 text-center">
                  <img classname="img-fluid qualities-img p-5" src alt="" />
                  <h5>INFOSYS</h5> 
                  <p>my name isnghjhjyhjghgghghjghjjg</p>
                </div>
                <div classname="col-md-4 text-center">
                  <img classname="img-fluid qualities-img p-5" src alt="" />
                  <h5>COGNIZANT</h5> 
                  <p>my name isnghjhjyhjghgghghjghjjg</p>
                </div>
              </div>
              <div classname="row">
                <div classname="col-md-4 text-center">
                  <img classname="img-fluid qualities-img p-5" src alt="" />
                  <h5>WIPRO</h5> 
                  <p>my name isnghjhjyhjghgghghjghjjg</p>
                </div>
                <div classname="col-md-4 text-center">
                  <img classname="img-fluid qualities-img p-5" src alt="" />
                  <h5>TECH MAHENDRA</h5> 
                  <p>my name isnghjhjyhjghgghghjghjjg</p>
                </div>
                <div classname="col-md-4 text-center">
                  <img classname="img-fluid qualities-img p-5" src alt="" />
                  <h5>ACCENTURE</h5> 
                  <p>my name isnghjhjyhjghgghghjghjjg</p>
                </div>
              </div>
            </div>
          </section>
          <section classname="pt-3 pb-4 clients-section">
            <div classname="container">
              <div classname="row-mt-4">
                <div classname="col text-center">
                  <h3>
                    Some of our trusted clients
                  </h3>
                </div>
              </div>
              <hr />
              <div classname="row"> 
                <div classname="col-md-2 col-md-6">
                  <img classname="img-fluid feature-img p-2" src=" " alt="" />
                </div>
                <div classname="col-md-2 col-md-6">
                  <img classname="img-fluid feature-img p-2" src=" " alt="" />
                </div>
                <div classname="col-md-2 col-md-6">
                  <img classname="img-fluid feature-img p-2" src=" " alt="" />
                </div>
                <div classname="col-md-2 col-md-6">
                  <img classname="img-fluid feature-img p-2" src=" " alt="" />
                </div>
                <div classname="col-md-2 col-md-6">
                  <img classname="img-fluid feature-img p-2" src=" " alt="" />
                </div>
                <div classname="col-md-2 col-md-6">
                  <img classname="img-fluid feature-img p-2" src=" " alt="" />
                </div>
              </div>
            </div>
          </section>
          {'{'}/* <footer classname="full-footer">
            <div classname="container top-footer p-md-3 p-1">
              <div classname="row">
                <div classname="col-md-3 pl-4 pr-4">
                  <img classname="img-fluid" src="   " alt="" />
                  <p>
                    fdfhlksdguybgds
                    wraxcvvvvngh<a href="#">Read more....</a>
                  </p>
                  <a style={{color: 'silver'}} classname="p-1" href="#"><i classname="fab fa-2x fa-facebook-square" /></a>
                  <a style={{color: 'silver'}} classname="p-1" href="#"><i classname="fab fa-2x fa-google-plus-square" /></a>
                  <a style={{color: 'silver'}} classname="p-1" href="#"><i classname="fab fa-2x fa-twitter-square" /></a>
                  <a style={{color: 'silver'}} classname="p-1" href="#"><i classname="fab fa-2x fa-instagram" /></a>
                </div>
                <div classname="col-md-3  pl-4 pr-4">
                  <h3>Important Links</h3>
                  <a href="#">Privacy Policy</a><br />
                  <a href="#">Youtube Channel</a><br />
                  <a href="#">Blog Articles</a><br />
                  <a href="#">Social Media</a><br />
                </div>
                <div classname="col-md-3 pl-4 pr-4 ">
                  <h3>Our services</h3>
                  <a href="#">internship</a><br />
                  <a href="#">scholarship</a><br />
                  <a href="#">student necessities</a><br />
                  <a href="#">job Prepa
                    ration</a><br />
                </div>
                <div classname="col-md-3 pl-4 pr-4">
                  <h3>Contact us</h3>
                  <a href="tel:8420490636"><i classname="fas fa-phone" />+(91)8420490636</a><br />
                  <a href="mailto:abc@gmail.com"><i classname="fas fa-email" />abc@gmail.com</a><br />
                  <div classname="embed-responsive embed-responsive-16by9">
                    <iframe classname="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0956277585033!2d86.20559661423685!3d23.420912507201475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42bd030b6ed53%3A0x4b97db1500c8b4a3!2sRam%20Krishna%20Mahato%20Government%20Engineering%20College%2C%20Purulia!5e0!3m2!1sen!2sin!4v1599972472756!5m2!1sen!2sin" frameBorder={0} />         
                  </div>         
                </div>
              </div>
            </div>
            <div classname="container-fluid bottom-footer pt-2">
              <div classname="row">
                <div classname="col-12 text-center">
                  <p>Copyrights @2022-all rights reserved</p>
                </div>
              </div>
            </div>
          </footer> */{'}'}
          {'{'}/* {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
          {/*  
     
     */} */{'}'}
        </section></div>
      
  )
}

export default index