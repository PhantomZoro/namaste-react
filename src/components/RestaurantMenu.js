import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);   
    
    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) {
        return <Shimmer/>
    }
    
    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.data?.cards[2]?.card?.card?.info;
    
    const {carousel} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories)
    
    return (
        <div className="text-center">
            
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>

            {categories.map((category, index) => {
                //Controlled Component
                return <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category.card.card}
                    showItems={index === showIndex  ? true : false}
                    setShowIndex = {() => setShowIndex(index)}
                    />
            })}
            
            
        </div>
    )
};

export default RestaurantMenu;