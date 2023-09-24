import React from "react";
import Shimmer from "./Shimmer";
import RestroCards from './RestroCards';
import {useState,useEffect} from 'react'

/* 
id : "3622"
name : "Madhapur Bawarchi Restaurant"
cloudinaryImageId : "35676313896c39c25537ec9464502d16"
locality : "Madhapur"
areaName : "Madhapur"
costForTwo : "₹400 for two"
cuisines
avgRating : 3.7
feeDetails
parentId : "19388"
avgRatingString : "3.7"
totalRatingsString : "10K+"
sla
availability
badges
isOpen : true
type : "F"
badgesV2
aggregatedDiscountInfoV3
orderabilityCommunication
differentiatedUi
reviewsSummary
displayType : "RESTAURANT_DISPLAY_TYPE_DEFAULT" */
const Body =()=>{
    const [ListofRestarents,setList] =useState([]);
    const [Searchfilter,SetSearchfilter] =useState([]);
    const [restrosearch,setrestrosearch] =useState('')

    useEffect( ()=>{
    fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4543845&lng=78.40278049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json =await data.json(data)
        let filterdatas =json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
         const filterList =filterdatas.map((res)=>{
            return res.info;
         })
         console.log("filter",filterdatas)
        setList(filterList)
        SetSearchfilter(filterList)
               
    }

const datalist = () =>{
    const filterData=ListofRestarents.filter((res)=>
    res.avgRating>2.5 
    )
    
    console.log("asdlhk",filterData)
    setList(filterData)
}
const datasearchdataa =()=>{
    const filterData = ListofRestarents.filter((res)=> res.name.includes(restrosearch)
    )
    
    console.log("asdlhk",filterData)
    SetSearchfilter(filterData)
    console.log("search box",restrosearch)
}

//conditional rendering 
/* if(ListofRestarents.length ===0){
    return (
    <Shimmer />
    )
} */
return ListofRestarents.length ===0 ? <Shimmer /> :(
    <div className="body">
<div className="search">
    <div className="filter">
        <div className="searchbox">
            <input type="text " className="search_filter" value={restrosearch} onChange={(e)=>{setrestrosearch(e.target.value)}} />
            <button onClick={datasearchdataa}>Search</button>

        </div>
<div>
<button className="filter_btn" onClick={datalist}>Top Rated Restro</button>

</div>
       

    </div>
</div>
    <div className="res-container">
       
  
      {Searchfilter.map((resesponcedata,i)=>{

        return(
            
            console.log(resesponcedata,i),
            <RestroCards key={resesponcedata.id} resData={resesponcedata} />
        )      
        }) 
        
    } 
    
    

        

</div>
    </div>
)
}

export default Body;