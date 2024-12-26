import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

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
            "https://api.allorigins.win/raw?url=" + 
            encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9189464&lng=77.643001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        );
        const json = await data.json();

        console.log(json);
        const extractedRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(extractedRestaurants);
        setListOfRestaurants(extractedRestaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    //Conditional Rendering
    return listOfRestaurants.length == 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
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
                <button className="filter-btn" onClick={() => {                    
                    const filteredListOfRestaurants = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4.3;
                    });
                    setFilteredRestaurants(filteredListOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
};

export default Body;