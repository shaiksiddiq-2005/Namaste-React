import RestaurantCard from "./RestaurantCard";
import { resturantOnlineStatus } from "./RestaurantCard";

import { ResturantCard_API } from "../utils/constants";

import { useEffect, useState, useContext } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import userDetails from "../utils/contextAPI";

const Body = () => {

    let [restaurantList, setrestaurantList] = useState([]);

    const [filteredResto, setfilteredResto] = useState([]);

    const [searchText, setsearchText] = useState("");


    useEffect(() => {
        fetchData();

    }, []);


    const fetchData = async () => {
        const data = await fetch(ResturantCard_API);
        const json = await data.json();

        const restaurantCards =
            json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setrestaurantList(restaurantCards);
        setfilteredResto(restaurantCards);
    };


    console.log("restaurantList:", restaurantList);


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div className="text-center p-4">
                <h1 className="text-xl sm:text-2xl font-bold">
                    Looks like you're offline please check your network connection
                </h1>

                <h2 className="mt-4">
                    Thank u
                </h2>
            </div>
        );
    }


    const ResturantWithOnlineStatus = resturantOnlineStatus(RestaurantCard);


    const context = useContext(userDetails);

    const name = context.name;
    const setUserName = context.setUserName;


    return restaurantList?.length === 0 ? (
        <Shimmer />
    ) : (

        <div className="bg-orange-600 min-h-screen w-full">

            {/* Heading */}

            <div className="text-center text-2xl sm:text-4xl md:text-5xl text-white font-bold px-4 py-8 sm:py-12 hover:scale-105 transition-all duration-300">

                Order food & groceries. Discover
                <br className="hidden sm:block" />
                best restaurants. Swiggy it!

            </div>


            {/* Search + Filter + User */}

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 pb-8">


                {/* Search */}

                <div className="flex relative w-full sm:w-auto">

                    <input
                        type="text"
                        className="border-3 border-gray-300 p-2 rounded-xl w-full sm:w-[450px] md:w-[550px] lg:w-[500px] h-14 sm:h-16 bg-white text-gray-700 text-base sm:text-xl font-semibold pr-16"
                        placeholder="Search for Restaurants...."
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e?.target?.value);
                        }}
                    />

                    <button
                        className="absolute right-2 top-2 rounded-xl bg-white hover:bg-gray-100 w-12 h-10 sm:h-12 p-1"
                        onClick={() => {
                            const searchedRestaurant =
                                restaurantList.filter((res) =>
                                    res?.info?.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                );

                            setfilteredResto(searchedRestaurant);
                        }}
                    >
                        🔎︎
                    </button>
                </div>


                {/* Filter Button */}

                <button
                    className="border-3 border-gray-300 rounded-xl p-2 w-full sm:w-[350px] lg:w-[400px] min-h-14 sm:min-h-16 bg-white text-base sm:text-xl text-gray-400 font-semibold"
                    onClick={() => {
                        const filteredList = restaurantList?.filter( (restoCard) => restoCard?.info?.avgRating > 4.2 );
                        setfilteredResto(filteredList);
                    }}
                >
                    Filter for Top Rated Restaurants
                </button>


                {/* User Input */}

                <div className="flex items-center w-full sm:w-auto justify-center">

                    <label className="font-bold text-gray-700 mr-2">
                        USER:
                    </label>

                    <input
                        className="border-3 border-gray-300 rounded-xl p-2 text-base sm:text-lg text-gray-700 font-semibold bg-white w-full sm:w-40"
                        value={name}
                        onChange={(e) =>
                            setUserName(e.target.value)
                        }
                    />

                </div>

            </div>


            {/* Restaurant Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 ">

                {filteredResto?.map((restaurant) => (

                    <Link
                        to={"/restaurants/" + restaurant?.info?.id}
                        key={restaurant?.info?.id}
                        className="w-full max-w-sm"
                    >

                        {
                            restaurant?.info?.isOpen
                                ? <ResturantWithOnlineStatus data={restaurant?.info} />
                                : <RestaurantCard data={restaurant?.info} />
                        }

                    </Link>

                ))}

            </div>

        </div>
    );
};

export default Body;