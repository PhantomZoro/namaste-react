import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () =>{
        const data = await fetch(
            "https://api.codetabs.com/v1/proxy?quest=" + 
            encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9189464&lng=77.643001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENT`)
        );
        const jsonData = await data.json();

        setResInfo(jsonData);
    }

    return resInfo;
}

export default useRestaurantMenu;