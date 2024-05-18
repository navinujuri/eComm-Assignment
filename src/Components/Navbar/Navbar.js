
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import React from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";



const Navbar = () => {

    const [ click, setClick]= useState(false);

    const handleClick=()=>{ setClick(!click);}

    const [color, setColor]=useState(false);

    const changeColor=()=>{
        if (window.scrollY >= 100) {
            setColor(true);}
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

  return (

    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>e-Commerce.</h1>
        </Link>

        <ul className={click?"nav-menu active":"nav-menu"}>
            <li><Link to= "/"> Products</Link> </li>
            <li><Link to= "/AddProduct"> Add Product</Link> </li>
            <li><Link to= "http://localhost:5000/api-docs/"> Swagger Docs</Link> </li>
            
        </ul>

        <div className="Hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={22} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
        </div>
      
    </div>
  )
}

export default Navbar;
