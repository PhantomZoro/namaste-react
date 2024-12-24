import React from "react";
import ReactDOM from "react-dom/client";

//React Element => Is an object which when rendered onto DOM it becomes a HTML Element

//JSX is transpiled by Parcel before it reached the JS engine helped by Babel. Babel transpiled the JSX code into browser compatible/JS understandable code => React.createElement

const number = 1000;

//React Element
const heading = (
    <h1 id="heading" className="head">
        Namaste React using JSX !!
    </h1>
);

//React Title Component
const Title = ()=>(
    <h1>
        This is the title component
    </h1>
)

//React Functional Component with component composition(title inside)
const HeadingComponent = () =>(
    <div id="container">
        <h2>{number}</h2>
        {heading}
        <Title/> 
        <h1 className="heading">
            Namaste React Functional Component
        </h1>
    </div>
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);