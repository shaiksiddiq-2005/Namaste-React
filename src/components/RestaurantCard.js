import { IMG_URL } from "../utils/constants";
import { useContext } from "react";
import userDetails from "../utils/contextAPI";

 
const RestaurantCard = ({data}) => {

    const userData = useContext(userDetails);



   
    
    return (
        <div className="w-60 h-130 m-4 p-4 shadow-lg bg-gray-100 hover:bg-gray-200 rounded-lg hover:scale-95 transition-all duration-300 ease-in-out">
    
            <img className="w-56 h-56 transition-all duration-500 ease-in-out hover:scale-110 rounded-lg" 
                src={IMG_URL + data.cloudinaryImageId}
                alt={data.name}
            />
            <h1 className="py-2 text-lg"> <b> {data.name} </b></h1>
            <h3>{data.cuisines.join(", ")}</h3>
            <h3>{data.costForTwo}</h3>  
            <h3>{data.avgRating}</h3>
            <h3>{data.sla.slaString}</h3>
            <h3>Owner: {userData.name}</h3>
            

         
        </div>
    );
};


export const resturantOnlineStatus = (RestaurantCard) => {
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white text-xs mx-4 p-1 border-gray-500 border-3 rounded-lg "> Online</label>
                <RestaurantCard {...props}/>  
            </div>
        );
    }


    }




export default RestaurantCard;