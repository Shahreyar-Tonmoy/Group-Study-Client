/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import SignIn from "../Components/Login/SignIn";
import Register from "../Components/Login/Register";
import AllAssignment from "../Components/Assignment/AllAssignment";
import AddAssignment from "../Components/Add Assignment/AddAssignment";
import PrivateRoute from "../Components/Login/PrivateRoute";
import Details from "../Components/Details/Details";
import Update from "../Components/Update/Update";






const Router = createBrowserRouter([
    {
        path :"/",
       element :<MainLayout></MainLayout> ,
       errorElement :<Error></Error>,
       children :[
        {
            path : "/",
            element : <Home></Home>,
           
        },
        {
            path : "/signin",
            element : <SignIn></SignIn>,
           
        },
        {
            path : "/register",
            element : <Register></Register>
           
        },
        {
            path : "/assinments",
            element : <AllAssignment></AllAssignment>,
            loader : ()=> fetch("http://localhost:5000/addassignment")
           
        },
        {
            path : "/addassinments",
            element : <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
           
        },
        {
            path : "/details",
            element :<Details></Details>
           
        },
        {
            path : "/update",
            element :<Update></Update>
           
        },
    
        
        
       ]
       
    }
])

export default Router;