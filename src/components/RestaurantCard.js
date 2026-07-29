import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({data}) => {
    
    return (
        <div className="w-60 h-110 m-5 p-4 shadow-lg bg-gray-100 hover:bg-blue-200">
    
            <img className="w-56 h-56" 
                src={IMG_URL + data.cloudinaryImageId}
                alt={data.name}
            />
            <h1> <b> {data.name} </b></h1>
            <h3>{data.cuisines.join(", ")}</h3>
            <h3>{data.costForTwo}</h3>  
            <h3>{data.avgRating}</h3>  
              
         
        </div>
    );
};


export default RestaurantCard;