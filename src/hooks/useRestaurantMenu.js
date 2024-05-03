import { useEffect, useState } from "react";
import restaurants from "../untils/mockData";
import { MENU_URL } from "../untils/constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (restId) => {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    
    // fetch data from api by passing Restaurant ID
  
    const res = await fetch(MENU_URL+restId);
    const restInfo = await res.json();
    const restData = restInfo?.data?.cards;
    // const restData = restInfo?.data?.cards[2]?.card?.card?.info;
    setRestaurant(restData);
    // console.log(restData);
    
    
    // Fetching menu detail from mock Data
    // const restData = restaurants.filter((rest) => rest.info.id == restId);
    // setRestaurant(restData[0].info);

  };

  return restaurant;
};

export default useRestaurantMenu;
