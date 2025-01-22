import { useState, useEffect } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true)

    //Check if online
    useEffect(()=>{

        window.addEventListener("offline", (event)=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", (event)=>{
            setOnlineStatus(true);
        });

    }, [])

    // Return a boolean variable 
    return onlineStatus;
}

export default useOnlineStatus;