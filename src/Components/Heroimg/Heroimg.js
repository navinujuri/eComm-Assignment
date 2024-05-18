import "./Heroimg.css";
import React from 'react';
import IntroImg from "../../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt={IntroImg}/>
      </div>
      <div className="Content">    
        <Link to="/" className="btn">Page NOT Found</Link>
     
      </div>
    </div>
  )
}

export default Heroimg;
