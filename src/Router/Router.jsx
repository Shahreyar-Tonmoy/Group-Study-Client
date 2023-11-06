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
import SubmittedAssignment from "../Components/SubmittedAssignment/SubmittedAssignment";
import GiveMark from "../Components/Give Mark/GiveMark";







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
            path : "/givemark",
            element : <PrivateRoute><GiveMark></GiveMark></PrivateRoute>
           
        },
        {
            path : "/submittedAssignment",
            element : <PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
            loader : ()=> fetch("http://localhost:5000/submit")
           
        },
        {
            path : "/details/:id",
            element :<Details></Details>,
            loader : ({params}) =>fetch(`http://localhost:5000/addassignment/${params.id}`)
           
        },
        {
            path : "/update/:id",
            element :<Update></Update>,
            loader : ({params}) =>fetch(`http://localhost:5000/addassignment/${params.id}`)

           
        },
       
    
        
        
       ]
       
    }
])

export default Router;