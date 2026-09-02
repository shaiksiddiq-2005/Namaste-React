import RestaurantCard from "./RestaurantCard";
import {resturantOnlineStatus} from "./RestaurantCard";

import { ResturantCard_API } from "../utils/constants"; 

import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import  useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {


let [restaurantList, setrestaurantList]=useState([]);

const [filteredResto, setfilteredResto] =useState([]);

const [searchText,setsearchText]=useState("");

 

useEffect(()=>{
    fetchData();
   
}, []);



const fetchData= async ()=>{
    const data= await fetch(ResturantCard_API);
    const json= await data.json();

    const restaurantCards = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   
    setrestaurantList(restaurantCards);
    setfilteredResto(restaurantCards);
};



 // To check the restaurantList and filteredResto state variables whenever they change, we can use the useEffect hook with these variables as dependencies. This will allow us to log their values to the console whenever they are updated.
// useEffect(() => {
    console.log("restaurantList:", restaurantList);
//     console.log("filteredResto:", filteredResto);
// }, [restaurantList, filteredResto]); 


const onlineStatus = useOnlineStatus();

if(onlineStatus === false){
    return (
        <div>
        <h1>Looks like you're offline please check your network connection </h1>
        <h2> Thank u </h2>
        </div>
    )
}

const ResturantWithOnlineStatus = resturantOnlineStatus(RestaurantCard);  //  Higher order component(HOC) is used to check the online status of the user and display the restaurant card accordingly. if the user is offline then the restaurant card will not be displayed and a message will be displayed to the user.


    return restaurantList?.length === 0 ? <Shimmer/> : (

        <div className="bg-gray-300">
            
            
            <div className="flex justify-center p-4">

                <div className="search">
                    <input type="text" placeholder="Search restaurants..." className="border p-2 rounded w-150 h-10" value={searchText} 
                    onChange={(e) => {
                        setsearchText(e?.target?.value);  
                    }}/>

                    <button className="border rounded bg-gray-100 hover:bg-gray-300 w-15 p-1"
                    onClick={()=>{
                        const searchedRestaurant = restaurantList.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                                

                        setfilteredResto(searchedRestaurant);
                    }}> 
                    search</button>
                    
                </div>


                <button className="border p-2 mx-5 bg-gray-100 rounded-lg hover:bg-gray-300" 
                    onClick={ () => { 
                    const filteredList = restaurantList?.filter(
                         (restoCard)=> restoCard?.info?.avgRating > 4.2
                         //restaurants[0].info.avgrating > 4.8 (i.e, 4.2 >4.8 => "false" so, it skip this restoCard ) loop was continous.......
                    );
                    setfilteredResto(filteredList);  // change had done from, setrestaurantList filter! button was not working!
                }}>

                    Filter for Top Rated Restaurants
                </button>  
            </div>


            <div className="flex flex-wrap p-4 justify-center">
            {filteredResto?.map((restaurant, index) => (

               <Link to={"/restaurants/"+ restaurant?.info?.id }  key={restaurant?.info?.id} >
            
                     {
                       restaurant?.info?.isOpen
                        ? <ResturantWithOnlineStatus data={restaurant?.info}/>  //HOC
                        : <RestaurantCard data={restaurant?.info} />
                     }

                </Link>
                
            ))}
           
            </div>

             
        </div>
    );
};

export default Body;
