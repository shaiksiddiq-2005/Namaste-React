import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

let [restaurantList, setrestaurantList]=useState([]);

const [filteredResto, setfilteredResto] =useState([]);

const [searchText,setsearchText]=useState("");


useEffect(()=>{
    fetchData();
}, []);

const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.6852956&lng=83.20374009999999&carousel=true&third_party_vendor=1");
    const json= await data.json();
    console.log(json);
   
    setrestaurantList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredResto(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
};


    return restaurantList.length === 0 ? <Shimmer/> : (

        <div className="body">
            
            
            <div className="filter">

                <div className="search">
                    <input type="text" placeholder="Search restaurants..." className="search-box" value={searchText} 
                    onChange={(e) => {
                        setsearchText(e.target.value);  
                    }}/>

                    <button
                    onClick={()=>{
                        const searchedRestaurant = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                

                        setfilteredResto(searchedRestaurant);
                    }}> 
                    search</button>
                    
                </div>


                <button className="filter-btn" 
                    onClick={ () => { 
                    const filteredList = restaurantList.filter(
                         (restoCard)=> restoCard.info.avgRating > 4.2
                         //restaurants[0].info.avgrating > 4.8 (i.e, 4.2 >4.8 => "false" so, it skip this restoCard ) loop was continous.......
                    );
                    setfilteredResto(filteredList);  // change had done from, setrestaurantList filter! button was not working!
                }}>

                    Filter!
                </button>  
            </div>


            <div className="res-container">
            {filteredResto.map((restaurant, index) => (
               <Link 
                key={restaurant.info.id}
                to={"/restaurants/"+ restaurant.info.id }>
               
               
               
               <RestaurantCard 
                 //key={index} // not using key(not Acceptable) <<<< using index as key  <<<< using unique id (Best pratice)
                data={restaurant.info} /> </Link>
                
            ))}
           
            </div>
        </div>
    );
};

export default Body;
