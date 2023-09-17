import React from "react";
import { LOGO_URL } from "../utils/constants";


const Header =()=>{
    return(
        <div className='header'>
            <div className='logo-continer'>
            <img className='logo' src={LOGO_URL}/>
            </div>
           
  <div className='nav-iteams'>
  <ul>
  <li>Home Us</li>
  <li>About</li>
  <li>Carts</li>
  </ul>
  </div> 
  
        </div>
    )
  }

export default Header;