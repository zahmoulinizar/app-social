import { createBrowserRouter } from "react-router-dom";
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import PageNotFound from "../Pages/PageNotFound";

const router = createBrowserRouter([
    { 
     path: '/' ,
     element : <div> home page </div> ,
     errorElement : <PageNotFound/> ,
   } ,
   {
     path:'/register' ,
     element : <Register/> ,
   } ,
   {
     path : '/login' ,
     element : <Login/>
   },
   {
     path:"/home"  ,
     element : <Home/>
   } 
 ])

 export default router