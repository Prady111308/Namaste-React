import React from "react";
import { CDN_URL } from "../../untils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import defaultfood from '../../Images/defaultfood.png'

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };
//   console.log(item.id)

  return (
    <div className="p-4 border-t-2 border-gray-200 flex justify-between">
      <div className="w-3/4 px-4 float-left">
        <div>
          <span className="text-sm my-0">
            {item.itemAttribute.vegClassifier == "VEG" ? "🟩" : "🟥"}
          </span>
          {item.isBestseller && (
            <span className="text-md mx-1 text-red-400 underline underline-offset-1">
              Bestseller
            </span>
          )}
        </div>
        <div className="text-base font-bold text-black/[.9] font-sans">
          {item.name}
        </div>
        <div className="text-base font-semibold text-black/[.9] my-4">
          <span>{item.price && "₹ " + item.price / 100}</span>
          <span>{item.defaultPrice && "₹ " + item.defaultPrice / 100}</span>
        </div>

        {item?.ratings?.aggregatedRating?.rating && (
          <div className="my-4">
            <span className="text-green-900 text-base py-[2] font-semibold">
              ★
            </span>
            <span className="mx-2 text-md font-semibold">
              {item?.ratings?.aggregatedRating?.rating} (
              {item?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>
        )}
        <div className="text-md text-gray-500">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="w-3/12 p-4">
        <div className="h-40 w-40 rounded-md relative">
          <img className="h-40 w-40 rounded-md" src={CDN_URL + item.imageId} onError={(event) => event.target.src=defaultfood} />
          <button
            className="absolute bottom-0 left-1/4 px-6 py-1 font-[500] rounded-md border-2 border-none text-white bg-black/[0.6] hover:bg-black/[.8] shadow-md"
            onClick={() => handleAddItem()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
