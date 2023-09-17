import React from 'react';

import ReactDOM from "react-dom/client" 



import Header from "./components/Headers.js";
import Body from './components/Body.js';





const AppLaoyout =()=>{
    return(
        <div className='app'>
            <Header />
 <div>
 <div className='bodyContainer'>  
<Body />
</div> 
<div className=' footer'>  

</div>
        </div>
        </div>
       
       
    )
}


const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLaoyout /> )






///JSX USING -just syntax
/// ract is a object