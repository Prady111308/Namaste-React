import React, { useState } from "react";

import RestuarantMenuCard from "./RestuarantMenuCard";

const RestaurantMenuList = ({ menu, showDish, toggleDish, toggleIcon }) => {
  const toggleDishes = () => {
    toggleDish();
  };
  // console.log(menu);

  return (
    <div className="w-5/6 mx-auto my-2 bg-white shadow-lg">
      <div className="border-b px-4">
        <div
          className="w-full text-left px-5 py-4 bg-white flex flex-wrap justify-between text-lg font-bold cursor-pointer hover:text-red-400"
          onClick={() => toggleDishes()}
        >
          <div>
            {menu.title} ({menu.itemCards.length})
          </div>
          <div>{toggleIcon}</div>
        </div>
        {showDish && <RestuarantMenuCard menu={menu} />}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
