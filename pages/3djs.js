import React from 'react'

function djs() {
  return (
    <div>
        <body>
    <div className="wrapper">
      <div className="cube-wrap">
        <div className="box">
          <div className="single-box side-back"></div>
          <div className="single-box side-top"></div>
          <div className="single-box side-bottom"></div>
          <div className="single-box side-left"></div>
          <div className="single-box side-right"></div>
          <div className="single-box side-front"></div>
        </div>
      </div>
    </div>
    </body>
    <style jsx>{`
    body{
        background: #262626;
    }
    .wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
    .cube-wrap {
    width: 400px;
    height: 400px;
    perspective: 2000px;
    perspective-origin: 50% -500px;
    }
    .single-box {
    background-image: url(col.jpeg);
    background-size: cover;
    display: block;
    position: absolute;
    width: 360px;
    height: 360px;
    background-color: #60c2ef;
    transform: rotateY(45deg) translateZ(-200px) rotateX(15deg);
    transform-origin: 50% 50% 0;
    border: 3px solid #fff;
    }
    .box {
    transform-style: preserve-3d;
    animation: rotate 10s infinite linear;
    }
    .side-front { 
    transform: translateZ(180px);
    }
    .side-back { 
    transform: rotateY(180deg) translateZ(180px);
    }
    .side-top {
    background-image: url(bg.jpg);
    transform: rotateX(90deg) translateZ(180px);
    }
    .side-bottom { 
    transform: rotateX(-90deg) translateZ(180px); 
    background-image: url(bg.jpg);
    }
    .side-left { 
    transform: rotateY(-90deg) translateZ(180px); 
    }
    .side-right { 
    transform: rotateY(90deg) translateZ(180px); 
    }
     
    @keyframes rotate {
    0% { transform: rotateY(0); }
         
    100% { transform: rotateY(360deg); }
    }
    `}</style>
    </div>
  )
}

export default djs