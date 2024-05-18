

import "./Heroimg2.css";

import React from 'react'

const Heroimg2 = (props) => {
  return (

    <div className="wrapper">
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    </div>
  )
}

export default Heroimg2;
