import React from "react";

import resObj from "../utils/mockData";
import RestroCards from './RestroCards';
import {useState} from 'react'


const Body =()=>{
    const [ListofRestarents,setList] =useState(resObj)

/* let ListofRestarents =[
    {
        "id": "111414562",
        "name": "Mutton Kofta kbx;kvvdlkf",
        "category": "Main Course",
        "imageId": "511e3b01f2375791836d99c3c8b6be96",
        "cusr":["biryani","american"],
        "price": 44000,
        "star":2.7,
        "variants": {
          
        },
        "variantsV2": {
          
        },
        "nextAvailableAtMessage": "Next available at 0:58 am, tomorrow",
        "ribbon": {
          
        },
        "type": "ITEM",
        "itemBadge": {
          
        },
        "badgesV2": {
          
        },
        "ratings": {
          "aggregatedRating": {
            
          }
        }
      },
       {
        "id": "11141456234",
        "name": "Mutton Kofta 0232ousdf",
        "category": "Main Course",
        "imageId": "511e3b01f2375791836d99c3c8b6be96",
        "cusr":["biryani","american"],
        "price": 44000,
        "star":2.25,
        "variants": {
          
        },
        "variantsV2": {
          
        },
        "nextAvailableAtMessage": "Next available at 0:58 am, tomorrow",
        "ribbon": {
          
        },
        "type": "ITEM",
        "itemBadge": {
          
        },
        "badgesV2": {
          
        },
        "ratings": {
          "aggregatedRating": {
            
          }
        }
    },   
] */
const datalist = () =>{
    const filterData=ListofRestarents.filter((res)=>
    res.star>2.5
    )
    console.log("asdlhk",filterData)
    setList(filterData)
}
return(
    <div className="body">
<div className="search">
    <div className="filter">

        <button className="filter_btn" onClick={datalist
        

        }>Top Rated Restro</button>

    </div>
</div>
    <div className="res-container">
       
  
      {ListofRestarents.map((resesponcedata)=>{
        return(
            <RestroCards key={resesponcedata.id} resData={resesponcedata} />
        )      
        }) 
        
    } 
    
    

        

</div>
    </div>
)
}

export default Body;