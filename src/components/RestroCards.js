import React from "react";
import {CDN_URL} from '../utils/constants';

const RestroCards=(props)=>{
    console.log("props",props)
    const {resData} =props;
   return(
    
    <div className='res-card' style={{backgroundColor:"#f1f1f1f1"}}>
        <img className='res-logo' alt='res-logo' src={CDN_URL}/>
    <h3>{resData.name}</h3>
    <h4>{resData.price}</h4>
    <h4>{resData.category}</h4>
    <h4>{resData.star}</h4>
    <h4>{resData.cusr.join(",")}</h4>
        </div>
   )
}
export default RestroCards;
