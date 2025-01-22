import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    //Local State Variable - Super powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    //Whenever a state variable updates, react triggers reconciliatioin cycle(re-renders the component)
    
    useEffect( ()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://api.codetabs.com/v1/proxy?quest=" + 
            encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9189464&lng=77.643001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        );
        const json = await data.json();

        console.log(json);
        const extractedRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(extractedRestaurants);
        setListOfRestaurants(extractedRestaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <h1>
                Looks like you are offline check your internet connection
            </h1>
        )
    }

    //Conditional Rendering
    return listOfRestaurants.length == 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 flex items-center">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={()=>{
                        //Filter the restaurants cards and update it
                        console.log(searchText);
                        const searchFilteredResetaurants = listOfRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(searchFilteredResetaurants);
                    }}>
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {                    
                    const filteredListOfRestaurants = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4.3;
                    });
                    setFilteredRestaurants(filteredListOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                    })
                }
            </div>
        </div>
    )
};

export default Body;