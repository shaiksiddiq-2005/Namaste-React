import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu=()=>{

const [resInfo, setresInfo]=useState(null);

const {resId} =useParams();
console.log(resId);


const fetchMenu= async()=>{

    const data= await fetch(MENU_API_URL + resId);
    const json= await data.json();

    console.log("hello");
    console.log(json);
    setresInfo(json.data);
};

useEffect(()=>{
                fetchMenu();
                },[]
);



if(resInfo === null){
    return<Shimmer/>
}

const {name, costForTwoMessage, cuisines, avgRating} = resInfo.cards[2].card.card.info;

const {itemCards} = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;


    return (
        <div className="menu">

            <h1>{name}</h1>
            <h3>{avgRating}  -  {costForTwoMessage}</h3>
            
            <h3>{cuisines.join(", ")}</h3>

            <h2> Menu</h2>

            <ul>
                
                { itemCards.map( (meno) => (
                    <li key={meno.card.info.id}>
                        
                        {meno.card.info.name} - {meno.card.info.price/100 + "/-"} 
                    
                    </li>) )}
               
            </ul>

        </div>
    );
};

export default RestaurantMenu;