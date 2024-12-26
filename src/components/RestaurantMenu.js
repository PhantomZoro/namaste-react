import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId);

    useEffect(() => {
        console.log("use Effect called")
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://api.allorigins.win/raw?url=" + 
            encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9189464&lng=77.643001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENT`)
        );
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData);        
    }

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