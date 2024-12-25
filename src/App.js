import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

//React Element => Is an object which when rendered onto DOM it becomes a HTML Element

//JSX is transpiled by Parcel before it reached the JS engine helped by Babel. Babel transpiled the JSX code into browser compatible/JS understandable code => React.createElement

 





const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
} 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);