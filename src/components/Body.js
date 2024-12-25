import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    //Local State Variable - Super powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    //console.log(useState(resList));

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {                    
                    filteredListOfRestaurants = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4.3;
                    });
                    setListOfRestaurants(filteredListOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
};

export default Body;