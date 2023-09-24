import React from "react";
import {CDN_URL} from '../utils/constants';

const RestroCards=(props)=>{
    console.log("props",props.info)
    const {resData} =props;
   return(
    
    <div className='res-card' style={{backgroundColor:"#f1f1f1f1"}}>
        <img className='res-logo' alt='res-logo' src={CDN_URL+resData.cloudinaryImageId
}/>
    <h3>{resData.name}</h3>
    <h4>{resData.costForTwo}</h4>
    <h4>{resData.category}</h4>
    <h4>{resData.avgRating}</h4>
        </div>
   )
}
export default RestroCards;
