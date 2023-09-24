import React from 'react';

import ReactDOM from "react-dom/client" 


import About from './components/About.js';
import Header from "./components/Headers.js";
import Body from './components/Body.js';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Contact from './components/Contact.js';
import Error from './components/Error.js';



const AppLaoyout =()=>{
    return(
        <div className='app'>
            <Header />
 <div>
 <div className='bodyContainer'>  
 <Outlet />

</div> 
<div className=' footer'>  

</div>
        </div>
        </div>
       
       
    )
}

const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLaoyout />,
        children:[
            {
                path:"/",
                element:<Body />
                
            },
            {
                path:"/about",
                element:<About />
                
            },
            {
                path:"/contact",
                element:<Contact />
            },
        ],
        errorElement:<Error />

    },
 
    
])
const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(
<RouterProvider router={appRouter} />

)






///JSX USING -just syntax
/// ract is a object