import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import Container from "../Container";
import { CDN_URL } from "../../untils/constants";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";
import { useState } from "react";

import menuData from "../../untils/MenuData";

const RestaurantMenu = () => {
  const [showDishIndex, setShowDishIndex] = useState(0);
  const { resId } = useParams(); //find dynamic restaurant Id sent in URl

  //find the restaurant Id from URL :resturantName-AreaName-restaurantID
  let restId = resId.split("-");
  restId = restId[restId.length - 1];

  //  console.log(restId);
  //fetch Restaurants info by passing restId using custom hook
  const restaurant = useRestaurantMenu(restId);

  


  // console.log(menuList);
  // console.log(restaurant);

  if (restaurant == null) return <Shimmer />;

  //de-structure of restaurant object
  // const { name, cloudinaryImageId, locality, cuisines } = restaurant;
  const {
    name,
    areaName,
    locality,
    city,
    cloudinaryImageId,
    avgRating,
    cuisines,
    sla,
    costForTwoMessage,
    totalRatingsString,
  } = restaurant[2].card?.card?.info //live restaurant info
  // = restaurant; // mock restaurant info
  // } ;


  //live menu data
  const menuList = restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((res)=> res.card?.["card"]?.["@type"] ===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log(menuList);
  // mock menu data
  // const menuList = restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const handleMenuClick = (index) =>{
    showDishIndex == index ? setShowDishIndex(null) : setShowDishIndex(index);
  }
  

  return (
    <Container>
      <div className="flex flex-wrap bg-white p-6 w-5/6 mx-auto rounded-3xl border my-12">
        <div className="">
          <img className="h-28 rounded-md" src={CDN_URL + cloudinaryImageId} />
        </div>
        <div className="mx-5">
          <div>
            <span className="font-bold text-xl">{name}</span>
          </div>
          <div className="text-black/[.65] text-md ">
            {locality} {areaName} {city}{" "}
          </div>
          <div className="my-2">
            <span className="bg-green-900 text-white px-1 rounded-sm text-sm py-[2] my-2">
              ★
            </span>
            <span className="mx-2 text-base">
              {avgRating} ({totalRatingsString})
            </span>
            <span className="mx-2">•</span>
            <span className="text-base">{costForTwoMessage}</span>
          </div>
          <div className="text-red-400 underline underline-offset-1 text-md my-2">
            {cuisines.join(", ")}
          </div>
        </div>
      </div>
      {menuList.map((menu, index) => (
        <RestaurantMenuList
          key={index}
          menu={menu.card.card}
          showDish={index === showDishIndex ? true : false}
          toggleIcon = {index === showDishIndex ? '🔼' : '🔽'}
          toggleDish = {()=>{handleMenuClick(index)}}
        />
      ))}
    </Container>
  );
};

export default RestaurantMenu;
