import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Necessity from '../../models/Necessity';
import User from '../../models/User';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
function Details({dataa,data,loggedIn}) {
  const router=useRouter()
  if (!loggedIn) {
    return (
      <>
      <Link href={router.push('../user/login')}>login</Link>
      </>
    )
  }else{
    return (
        <div style={{ paddingTop: `20vh` ,paddingBottom:'10vh'}}>
            <Head>
        <meta charSet="UTF-8" />
        <title>Necessity Details</title>
      </Head>
            <main className="containerr">
                <div className="left-column">
                    <InnerImageZoom  className="img" src={dataa[0].imageUrl[0]} alt="" />
                </div>


                <div className="right-column">



                    <div className="product-description">
                        <h1>{dataa[0].product_name}</h1>
                        <p>{dataa[0].details}</p>
                        <span>{dataa[0].name}</span>
                    </div>


                    <div className="product-configuration">

                        <div className="cable-config">

                            <a href="#">{dataa[0].session}</a>

                            <div className="cable-choose">
                                <button>Straight</button>
                                <button>Coiled</button>
                                <button>Long-coiled</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-price">
                        <span>₹{dataa[0].price}.00</span>
                        <Link href={`https://wa.me/+91`+dataa[0].contact+"?text=Hi, I am "+data.name+" I want to Buy Your product...."} text=
                        {"Hi, I am"+data.name+"I want to Buy Your product"}
                         >
                        <a target={"blank"} className="cart-btn">Message {dataa[0].contact}</a></Link>
                        {/* <a href={'tel:'+dataa[0].contact} className="cart-btn">Call {dataa[0].contact}</a> */}
                    </div>
                </div>
            </main>

            <style>
                {`
    
.containerr {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction:row;
  }
  .left-column {
    min-width: 40%;
    width:60%;
    margin-right: 2rem;
    height:100%;
  }
  
  .right-column {
    // margin-top: 60px;
  }
  // max-height:1rem;

  .left-column .img {
    // width: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;
    // opacity: 0;
    transition: all 0.3s ease;
  }

  .product-description {
    border-bottom: 1px solid #E1E8EE;
    // margin-bottom: 20px;
  }
  .product-description span {
    font-size: 18px;
    color: #358ED7;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  .product-description h1 {
    font-weight: 300;
    font-size: 52px;
    color: #43484D;
    // line-height:1px;
    letter-spacing: -2px;
  }
  .product-description p {
    font-size: 16px;
    font-weight: 300;
    color: #86939E;
    line-height: 24px;
  }

  .product-color {
    margin-bottom: 30px;
  }
 
  .cable-choose {
    margin-bottom: 20px;
  }
   
  .cable-choose button {
    border: 2px solid #E1E8EE;
    border-radius: 6px;
    padding: 13px 20px;
    font-size: 14px;
    color: #5E6977;
    background-color: #fff;
    cursor: pointer;
    transition: all .5s;
  }
   
  .cable-choose button:hover,
  .cable-choose button:active,
  .cable-choose button:focus {
    border: 2px solid #86939E;
    outline: none;
  }
   
  .cable-config {
    border-bottom: 1px solid #E1E8EE;
    margin-bottom: 20px;
  }
   
  .cable-config a {
    color: #358ED7;
    text-decoration: none;
    font-size: 12px;
    position: relative;
    margin: 10px 0;
    display: inline-block;
  }
  .cable-config a:before {
    content: &amp;quot;?&amp;quot;;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 2px solid rgba(53, 142, 215, 0.5);
    display: inline-block;
    text-align: center;
    line-height: 16px;
    opacity: 0.5;
    margin-right: 5px;
  }

  .product-price {
    display: flex;
    align-items: center;
  }
   
  .product-price span {
    font-size: 26px;
    font-weight: 300;
    color: #43474D;
    margin-right: 20px;
  }
   
  .cart-btn {
    display: inline-block;
    background-color: #7DC855;
    border-radius: 6px;
    font-size: 16px;
    color: #FFFFFF;
    text-decoration: none;
    padding: 12px 30px;
    transition: all .5s;
  }
  .cart-btn:hover {
    background-color: #64af3d;
  }
  @media screen and (max-width: 768px){
.containerr{
    flex-direction:column;
}
.left-column{
    width:100%;
}
.right-column{
    width:100%;
}
  }
    
    `}
            </style>

        </div>
    )
}
}

export default Details;

export async function getServerSideProps(query) {
  const details = query.query.details;
  const bk = await Necessity.find({_id:details});
  let arr = []
  // for (var i = 0; i < bk.length; i++) {
    let id = bk[0].userId
    let user = await User.findOne({ _id: id });
    let merge = _.merge(user, bk[0], bk[0].userId);
    arr.push(user)
  return {
      props: {
       dataa: JSON.parse(JSON.stringify(arr)),
      },
    };
}