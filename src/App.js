import React from 'react'
import MobEntry from './Components/MobEntry'
import OtpVerify from './Components/OtpVerify'
import DashBoard from './Components/DashBoard';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<MobEntry/>,
    },
    {
      path:"verify",
      element:<OtpVerify/>
    },
    {
      path:"dashboard",
      element:<DashBoard/>
    }
  ])
  return (
   <div>
     <RouterProvider router={router}/>
   </div>
  )
}

export default App
