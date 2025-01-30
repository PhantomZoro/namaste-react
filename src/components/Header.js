import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //Selector is a hook in React
    //Subscribing to the store using Selector Hook
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    useEffect(()=>{
    },[]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
            <div className="logo-container">
                <img className = "w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl"> 
                        <Link to="/cart">Cart ({cartItems.length} Items)</Link>
                    </li>
                    <button className="login" onClick={() => {
                       btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}>
                        
                    {btnNameReact} 
                    
                    </button>
                    <li className="font-bold px-4">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;