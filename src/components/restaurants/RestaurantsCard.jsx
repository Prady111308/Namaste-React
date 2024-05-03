import { CDN_URL } from "../../untils/constants";
const RestaurantCard = (props) => {
  // console.log(props.ResInfo);
  const {
    name,
    areaName,
    cloudinaryImageId,
    avgRating,
    cuisines,
    sla,
    aggregatedDiscountInfoV3,
  } = props?.ResInfo;
  //  console.log(cuisines);
  return (
    <div className=" m-3">
      <div className="w-100 relative rounded-md">
        <div className="relative">
          <img
            className="h-52 w-full rounded-md"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        {aggregatedDiscountInfoV3 && (
          <div className="absolute bottom-0 bg-black/[.25] h-8 w-full rounded-b-md px-1 text-white leading-8 font-semibold">
            <span>
              {aggregatedDiscountInfoV3?.header}{" "}
              {aggregatedDiscountInfoV3?.subHeader}
            </span>
          </div>
        )}
      </div>
      <div className="px-1 my-1">
        <div className="truncate ... w-full font-[600] text-gray-800">
          {name}
        </div>
        <div className="font-medium text-md">
          <span className="bg-green-900 text-white px-1 rounded-sm text-sm py-[2]">
            ★
          </span>
          <span className="mx-1 ">{avgRating}</span>
          <span className="mx-1">•</span>
          <span>{sla.slaString}</span>
        </div>
        <div className="truncate ... h-5 w-full text-gray-600 text-md my-1">
          {cuisines.join(", ")}
        </div>
        <div className="truncate ... text-md">{areaName}</div>
      </div>
    </div>
  );
};

//Higher Order function
export const PromotedComponentCard = (RestaurantCard) => {
  // console.log('Promoted component')
  return (props) => {
    return (
      <>
        <label className="absolute top-3 left-3 bg-black/[0.6] text-white px-1">Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
