import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";


const Body = () => {

let [restaurantList, setrestaurantList]=useState(resList);


    return (
        <div className="body">


            <div className="search">
                <input type="text" placeholder="Search restaurants..." />
            </div>


            <div className="filter">
                
                <button className="filter-btn" 
                onClick={ () => { 
                    
                   const filteredList = restaurantList.filter(
                         (res)=> res.rating >4.4  
                    );
                    setrestaurantList(filteredList);
                }}>



                    Filter for Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
            {restaurantList.map((restaurant, index) => (
                <RestaurantCard 
                key={restaurant.name} //key={index} // not using key(not Acceptable) <<<< using index as key  <<<< using unique id (Best pratice)
                data={restaurant} />
            ))}

            </div>
        </div>
    );
};

export default Body;
