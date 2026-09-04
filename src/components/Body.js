import RestaurantCard from "./RestaurantCard";
import {resturantOnlineStatus} from "./RestaurantCard";

import { ResturantCard_API } from "../utils/constants"; 

import {useEffect, useState, useContext} from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import  useOnlineStatus from "../utils/useOnlineStatus";

import userDetails from "../utils/contextAPI";  // importing the context API from the utils folder to use it in the application.

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


// contextAPI example, it is used to get the value of the context API and use it in the component. The value can be accessed using the useContext hook in the component.
const context = useContext(userDetails);  // using the useContext hook to get the setUserName function from the context API and use it in the component. The setUserName function is used to update the userName state in the AppLayout component.
const name=context.name;
const setUserName=context.setUserName;


    return restaurantList?.length === 0 ? <Shimmer/> : (

        <div className="bg-orange-600">

            <br/>
            <br/>
            <div className="text-center text-5xl text-white font-bold p-4 hover:scale-105 transition-all duration-300"> Order food & groceries. Discover <br/> best restaurants. Swiggy it!</div> 
            <br/>
            <br/>
    
            <div className="flex justify-center p-4">

                <div className=" flex relative">


                        <button className = "absolute rounded-xl bg-white hover:bg-gray-100 w-15 p-1 mt-4 mr-3 mb-3 ml-130"
                             onClick={()=>{
                                    const searchedRestaurant = restaurantList.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    
                                    setfilteredResto(searchedRestaurant);
                                    }}> 
                        🔎︎</button>

                        <div className="search">
                            <input type="text" 
                                className="border-3 border-gray-300 p-2 rounded-xl w-150 h-16 bg-white text-gray-700 text-xl font-semibold" 
                                placeholder="Search for Restaurants...." 
                                value={searchText} 
                                onChange={(e) => {
                                setsearchText(e?.target?.value);  
                            }}/>   
                         </div>

                        
                                
                </div>

                <button className="border-3 border-gray-300 rounded-xl p-2 mx-5 w-100 h-16 bg-white text-xl text-gray-400 font-semibold " 
                    onClick={ () => { 
                    const filteredList = restaurantList?.filter(
                         (restoCard)=> restoCard?.info?.avgRating > 4.2
                         //restaurants[0].info.avgrating > 4.8 (i.e, 4.2 >4.8 => "false" so, it skip this restoCard ) loop was continous.......
                    );
                    setfilteredResto(filteredList);  // change had done from, setrestaurantList filter! button was not working!
                }}>

                    Filter for Top Rated Restaurants
                </button>  
                

                {/* Owner Input value instantly changes contextAPI */}
                <div className=""> 
                    <label className="font-bold text-gray-700">USER: </label>
                    <input
                            className="border-3 border-gray-300 rounded-xl p-2 my-3 text-lg text-gray-700 font-semibold bg-white" 
                            value={name}
                            onChange={(e)=> setUserName(e.target.value)}
                    />
                </div>

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
