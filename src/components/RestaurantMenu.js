import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import { IMG_URL } from "../utils/constants";
import MenuCategories from "./MenuCategories";


const RestaurantMenu=()=>{

const [resInfo, setresInfo]=useState(null);

const {resId} =useParams(); // so that we pass this resId to the Api url to get the menu of the particular matched resturant. so that we can get the menu of the particular restaurant which is clicked by the user. and this resId is passed to the api url to get the menu of the particular restaurant.
console.log(resId);


const fetchMenu= async()=>{

    const data= await fetch(MENU_API_URL + resId);
    const json= await data.json();

    console.log("hello");
    console.log(json);

    setresInfo(json);
};

useEffect(()=>{
                fetchMenu();
                },[]
);



if(resInfo === null){
    return<Shimmer/>
}

const {name, costForTwoMessage, cuisines, avgRating, totalRatingsString, cloudinaryImageId} = resInfo.data.cards[2].card.card.info;

const {itemCards} = resInfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

console.log(resInfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards);

const categories=resInfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(categories)


    return (
        <div className="text-center">

            <h1 className="text-3xl mt-3 font-bold">{name}</h1>
            <br/>
            <img className="h-110 w-8/12 mx-auto rounded-2xl " src={IMG_URL + cloudinaryImageId} alt={name}/>
            <h3 className="font-bold">{cuisines.join(", ")}</h3>
            <h3 className="font-semibold">🌟{avgRating} ({totalRatingsString})</h3>
            <h4 className="font-medium">{costForTwoMessage}</h4>
            
            <br/>

            <h1 className="text-2xl font-bold"> Menu</h1>
    
                {
                categories.map((category)=>(
                <MenuCategories key={category.card.card.categoryId} data={category?.card?.card} />
                ))
                }
               


        </div>
    );
};

export default RestaurantMenu;