import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {

  Link,
} from "react-router-dom";

const Header =()=>{

const [btnName,setbtn] =useState("Login") ;

const loginchange =()=>{
btnName === "Login"?setbtn("LogOut"):setbtn("Login")
}

    return(
        <div className='header'>
            <div className='logo-continer'>
            <img className='logo' src={LOGO_URL}/>
            </div>
           
  <div className='nav-iteams'>
  <ul>
  <li><Link to="/">Home Us</Link></li>
  <li><Link to="about">About</Link></li>
  <li><Link to="contact">Contact</Link></li>
  <li><button className="login_btn" onClick={loginchange}>{btnName}</button></li>
  </ul>
  </div> 
  
        </div>
    )
  }

export default Header;