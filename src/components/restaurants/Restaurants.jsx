import RestaurantCard, { PromotedComponentCard } from "./RestaurantsCard";

import restaurantsData from "../../untils/mockData";
import ErrorMessage from "../ErrorMessage";
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer";
import { Link } from "react-router-dom";
import Container from "../Container";
import { FaSearch } from "react-icons/fa";

const Restaurants = () => {
  // let [restData, setRestData] = useState(restaurants);
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [filterRestaurants, setFilterRestaurants] = useState(restaurantsData);
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(false);
  // const searchText = useRef("");

  const [searchText, setSearchText] = useState("");

  const filterHandler = () => {
    topRatedRestaurants
      ? (setFilterRestaurants(restaurants), setSearchText(""))
      : setFilterRestaurants(
          restaurants.filter((restaurant) => restaurant.info.avgRating > 4)
        );

    setTopRatedRestaurants(!topRatedRestaurants);
  };

  // call higher order component => PromotedComponentCard
  const PromotedComponent = PromotedComponentCard(RestaurantCard);

  useEffect(() => {
    setLoading(false);
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch data from swiggy api
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    const restList =
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilterRestaurants(restList);
    setRestaurants(restList);
    // console.log(filterRestaurants);
  };

  //find restaurants based on input text for search
  const searchRestaurants = (searchText) => {
    let filterData = restaurants;
    if (searchText) {
      filterData = restaurants.filter((rest) =>
        rest.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilterRestaurants(filterData);
  };

  const debounce = (func, timeOut = 2000) => {
    let timer;
    return (...args) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
        // console.log(args);
      }, timeOut);
    };
  };
  const inputChangeHandler = debounce(searchRestaurants, 1000);

  // console.log('rendered');

  const handleClear = () => {
    setFilterRestaurants(restaurants);
    setSearchText("");
  };
  const cleanString = (str) => {
    return str.replace(/[^a-zA-Z]+/gi, " ").trim();
  };

  if (loading && filterRestaurants && filterRestaurants.length == 0)
    return <Shimmer />;

  return (
    <>
      <Container>
        <div className="flex flex-wrap w-100 h-10 my-3 px-4">
          <div className="relative h-10">
            <span className="absolute top-[30%] left-1 text-black/[.5]"><FaSearch /></span>
            <input
              className="w-100 h-10 px-6 rounded-sm focus:outline-none shadow-sm"
              type="text"
              required
              placeholder="Search restaurants"
              // ref={searchText}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                // searchText.current = e.target.value
                inputChangeHandler(e.target.value);
              }}
            />
            {searchText && searchText.length > 0 && (
              <button
                className="absolute right-2 leading-10 text-red-500 font-bold"
                onClick={() => handleClear()}
              >
                ✕
              </button>
            )}
            {/* <button
                  type="button"
                  className="search-button"
                  onClick={() => {
                    const filterRest = restaurants.filter((res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
                    setFilterRestaurants(filterRest);
                    setSearchText("");
                  }}
                >
                  Search
                </button> */}
          </div>
          <div className="h-10">
            <button
              type="button"
              className="h-10 rounded-sm mx-3 bg-red-400 px-3 text-white hover:bg-red-500"
              onClick={() => filterHandler()}
            >
              {topRatedRestaurants
                ? "All Restaurants ☆"
                : "Top Rated Restaurants ★"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {filterRestaurants && filterRestaurants.length > 0 ? (
            filterRestaurants.map((restaurant) => {
              let restParam =
                cleanString(restaurant?.info?.name) +
                " " +
                cleanString(restaurant?.info?.areaName) +
                " " +
                restaurant?.info?.id;
              restParam = restParam.split(" ").join("-");
              return (
                <Link
                  to={"/restaurants/" + restParam}
                  key={restaurant?.info?.id}
                >
                  {restaurant.info.avgRating > 4.4 ? (
                    <PromotedComponent ResInfo={restaurant.info} />
                  ) : (
                    <RestaurantCard ResInfo={restaurant.info} />
                  )}
                </Link>
              );
            })
          ) : (
            <h1>No Restaurants Found !!</h1>
          )}
        </div>
      </Container>
    </>
  );
};

export default Restaurants;
