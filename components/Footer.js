import React from "react";
import { FaFacebookF , FaInstagramSquare ,FaTwitter} from 'react-icons/fa';
import { AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';
function Footer() {
  return (
    <div>
      
      <div className="footerbody">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook"><FaFacebookF/></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"><FaTwitter/></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube"><AiFillYoutube/></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"><AiFillLinkedin/></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"><FaInstagramSquare/></i>
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
.footerbody
{
    margin: 0;
    padding: 0;
    // background: #dedede;
    background: #f2f2f2;
    justify-content: center;
    align-items: center;
    display: flex;
    min-width:100vw;
    height: 50vh;
}
ul
{
     
    margin: 0;
    padding: 0;
}
ul li
{
    list-style: none;
    display: inline-block;
}
ul li a
{
    position: relative;
    width: 120px;
    height: 120px;
    display: block;
    text-align: center;
    margin: 0 10px;
    border-radius: 50%;
    padding: 6px;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
    background: linear-gradient(0deg, #ddd, #fff);
    transition: .5s;
}
ul li a:hover
{
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}
ul li a .fa
{
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(0deg, #fff, #ddd);
    border-radius: 50%;
    line-height: calc(120px - 12px);
    font-size: 40px;
    color: #262626;
    transition: .5s;
}
ul li:nth-child(1) a:hover .fa
{
    color: #3b5999;
}
ul li:nth-child(2) a:hover .fa
{
    color: #55acee;
}
ul li:nth-child(3) a:hover .fa
{
    color: #dd4b39;
}
ul li:nth-child(4) a:hover .fa
{
    color: #0077B5;
}
ul li:nth-child(5) a:hover .fa
{
    color: #e4405f;
}


@media screen and (max-width :450px) {
  ul li a{
    height:60px;
    width:60px;
    margin: 5px 5px;
  }
  ul li a .fa{
    line-height: calc(50px );
    font-size:20px;
    
  }
}

`}</style>

    </div>
  );
}

export default Footer;
