import React from 'react'

function Contacts() {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-bg">
          {/* <h3>Get in Touch with Us</h3> */}
          <h2 style={{ marginTop: '1rem' }}>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">Rkmgec</p>
        </div>


        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span><i className="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span className="text">+91-8509-073-470</span>
              <span className="text">+91-8509-073-470</span>
            </div>
            <div>
              <span><i className="fas fa-envelope-open"></i></span>
              <span>Official Website</span>
              <span className="text">rkmgec.ac.in</span>
            </div>
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span className="text">Ramkrishna Mahato
                Government Engineering College,
                Vill: Agharpur,
                P.O.- Ramamoti,
                P.S.- Joypur,
                Dist.- Purulia 723103. </span>
            </div>
            <div>
              <span><i className="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span className="text">Monday - Friday (9:40 AM to 5:00 PM)</span>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <textarea rows="5" placeholder="Message" className="form-control"></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img src="/contact-png.png" alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp" width="100%" height="450" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
        </div>

        <div className="contact-footer">
          <h3>Follow Us</h3>
          <div className="social-links">
            {/* <a href = "#" className = "fab fa-facebook-f"></a>
          <a href = "#" className = "fab fa-twitter"></a>
          <a href = "#" className = "fab fa-instagram"></a>
          <a href = "#" className = "fab fa-linkedin"></a>
          <a href = "#" className = "fab fa-youtube"></a> */}
          </div>
        </div>
      </section>

      <style>
        {
          `
    
    .contact-bg{
      height: 60vh;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/contact-bg.jpg);
      background-position: 50% 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
      text-align: center;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .contact-bg h3{
      font-size: 1.3rem;
      font-weight: 400;
  }
  .contact-bg h2{
      font-size: 3rem;
      text-transform: uppercase;
      padding: 0.4rem 0;
      letter-spacing: 4px;
  }
  .line div{
      margin: 0 0.2rem;
  }
  .line div:nth-child(1),
  .line div:nth-child(3){
      height: 3px;
      width: 70px;
      background: #f7327a;
      border-radius: 5px;
  }
  .line{
      display: flex;
      align-items: center;
  }
  .line div:nth-child(2){
      width: 10px;
      height: 10px;
      background: #f7327a;
      border-radius: 50%;
  }
  .text{
      font-weight: 300;
      opacity: 0.9;
  }
  .contact-bg .text{
      margin: 1.6rem 0;
  }
  .contact-body{
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 1rem;
  }
  .contact-info{
      margin: 2rem 0;
      text-align: center;
      padding: 2rem 0;
  }
  .contact-info span{
      display: block;
  }
  .contact-info div{
      margin: 0.8rem 0;
      padding: 1rem;
  }
  .contact-info span .fas{
      font-size: 2rem;
      padding-bottom: 0.9rem;
      color: #f7327a;
  }
  .contact-info div span:nth-child(2){
      font-weight: 500;
      font-size: 1.1rem;
  }
  .contact-info .text{
      padding-top: 0.4rem;
  }
  .contact-form{
      padding: 2rem 0;
      border-top: 1px solid #c7c7c7;
  }
  .contact-form form{
      padding-bottom: 1rem;
  }
  .form-control{
      width: 100%;
      border: 1.5px solid #c7c7c7;
      border-radius: 5px;
      padding: 0.7rem;
      margin: 0.6rem 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      outline: 0;
  }
  .form-control:focus{
      box-shadow: 0 0 6px -3px rgba(48, 48, 48, 1);
  }
  .contact-form form div{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0.6rem;
  }
  .send-btn{
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      color: #fff;
      background: #f7327a;
      border: none;
      border-radius: 5px;
      padding: 0.7rem 1.5rem;
      cursor: pointer;
      transition: all 0.4s ease;
  }
  .send-btn:hover{
      opacity: 0.8;
  }
  .contact-form > div img{
      width: 85%;
  }
  .contact-form > div{
      margin: 0 auto;
      text-align: center;
  }
  .contact-footer{
      padding: 2rem 0;
      background: #000;
  }
  .contact-footer h3{
      font-size: 1.3rem;
      color: #fff;
      margin-bottom: 1rem;
      text-align: center;
  }
  .social-links{
      display: flex;
      justify-content: center;
  }
  .social-links a{
      text-decoration: none;
      width: 40px;
      height: 40px;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.4rem;
      transition: all 0.4s ease;
  }
  .social-links a:hover{
      color: #f7327a;
      border-color: #f7327a;
  }
  
  @media screen and (min-width: 768px){
      .contact-bg .text{
          width: 70%;
          margin-left: auto;
          margin-right: auto;
      }
      .contact-info{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
      }
  }
  
  @media screen and (min-width: 992px){
      .contact-bg .text{
          width: 50%;
      }
      .contact-form{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
      }
  }
  
  @media screen and (min-width: 1200px){
      .contact-info{
          grid-template-columns: repeat(4, 1fr);
      }
  }
    
    `
        }
      </style>

    </div>
  )
}

export default Contacts