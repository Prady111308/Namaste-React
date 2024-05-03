import React from "react";
import { CDN_URL } from "../../untils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cartSlice";
import defaultfood from '../../Images/defaultfood.png'

const ItemList = ({ item }) => {
  dispatch = useDispatch();

  // console.log(item.id)

  return (
    <div className="p-2 border-b border-gray-100 flex">
      <div className="">
        <div className="h-20 w-20 rounded-md relative">
          <img className="h-20 w-20 rounded-md" src={CDN_URL + item.imageId} onError={(event)=>{event.target.src=defaultfood }} />
          {/* */}
        </div>
      </div>
      <div className="px-4">
        <div className="text-base font-bold text-black/[.9] font-sans">
          <span className="text-sm">
            {item.itemAttribute.vegClassifier == "VEG" ? "🟩" : "🟥"}
          </span>
          <span className="px-2 my-2">{item.name}</span>
        </div>
        <div className="text-base font-semibold text-black/[.9] my-2">
          {item.price ? (
            <span>{"₹ " + item.price / 100}</span>
          ) : (
            <span>{"₹ " + item.defaultPrice / 100}</span>
          )}
        </div>
        <div>
          <button
            className="px-2 py-1 text-md rounded-md border-2 border-none text-white bg-red-400 hover:bg-red-500"
            onClick={() => dispatch(removeItem({ id: item.id }))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
