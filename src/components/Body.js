import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";

const Body = () => {

let [restaurantList, setrestaurantList]=useState([]);

useEffect(()=>{
    fetchData();
}, []);

const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.2617554&lng=82.9816562&carousel=true&third_party_vendor=1");
    const json= await data.json();
    console.log(json);
   
    setrestaurantList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
};

    return (
        <div className="body">

            <div className="search">
                <input type="text" placeholder="Search restaurants..." />
            </div>
            <div className="filter">
                
                <button className="filter-btn" 
                onClick={ () => { 
                    
                   const filteredList = restaurantList.filter(
                         (restoCard)=> restoCard.info.avgRating > 4.8  
                         //restaurants[0].info.avgrating > 4.8 (i.e, 4.2 >4.8 => "false" so, it skip this restoCard ) loop was continous.......
                    );

                    console.log(filteredList);


                    setrestaurantList(filteredList);
                }}>

                    Filter for Top Rated Restaurant
                </button>
                
            </div>

            <div className="res-container">
            {restaurantList.map((restaurant, index) => (
                <RestaurantCard 
                key={restaurant.info.id} //key={index} // not using key(not Acceptable) <<<< using index as key  <<<< using unique id (Best pratice)
                data={restaurant.info} />
                
            ))}
           
            </div>
        </div>
    );
};

export default Body;
