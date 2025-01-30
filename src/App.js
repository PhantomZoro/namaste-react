import React,{lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


//React Element => Is an object which when rendered onto DOM it becomes a HTML Element

//JSX is transpiled by Parcel before it reached the JS engine helped by Babel. Babel transpiled the JSX code into browser compatible/JS understandable code => React.createElement

const Grocery = lazy (()=>import("./components/Grocery"))

const AppLayout = () =>{

    const [userName, setUserName] = useState();

    //Authentication
    useEffect(() => {
        const data = {
            name: "Phaneendra B"
        }
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
            </UserContext.Provider>
        </Provider>
        
        
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
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);