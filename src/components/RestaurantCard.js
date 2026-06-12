import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({data}) => {
    
    return (
        <div className="ResturantCard">
    
            <img className="res-img" 
                src={IMG_URL + data.cloudinaryImageId}
                alt={data.name}
            />
            <h1>{data.name}</h1>
            <h3>{data.cuisines.join(", ")}</h3>
            <h3>{data.costForTwo}</h3>  
            <h3>{data.avgRating}</h3>  
              
         
        </div>
    );
};


export default RestaurantCard;