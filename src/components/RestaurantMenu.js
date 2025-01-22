import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);    

    if(resInfo === null) {
        return <Shimmer/>
    }
    
    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.data?.cards[2]?.card?.card?.info;
    
    const {carousel} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(carousel);
    
    return (
        <div className="menu">
            
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            
            <ul>
                {
                    carousel.map((item) => {
                        return <li>{item.dish.info.name}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default RestaurantMenu;