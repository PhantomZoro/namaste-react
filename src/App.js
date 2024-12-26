import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//React Element => Is an object which when rendered onto DOM it becomes a HTML Element

//JSX is transpiled by Parcel before it reached the JS engine helped by Babel. Babel transpiled the JSX code into browser compatible/JS understandable code => React.createElement

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
} 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);