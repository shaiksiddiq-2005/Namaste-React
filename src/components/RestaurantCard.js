import { IMG_URL } from "../utils/constants";
 
const RestaurantCard = ({data}) => {

   
    
    return (
        <div className="w-60 h-130 m-4 p-4 shadow-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
    
            <img className="w-56 h-56" 
                src={IMG_URL + data.cloudinaryImageId}
                alt={data.name}
            />
            <h1 className="py-2 text-lg"> <b> {data.name} </b></h1>
            <h3>{data.cuisines.join(", ")}</h3>
            <h3>{data.costForTwo}</h3>  
            <h3>{data.avgRating}</h3>
            <h3>{data.sla.slaString}</h3>
            

         
        </div>
    );
};


export const resturantOnlineStatus = (RestaurantCard) => {
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-green-500 text-xs mx-4 p-1 border-gray-500 border-2 "> Online</label>
                <RestaurantCard {...props}/>  
            </div>
        );
    }


    }




export default RestaurantCard;