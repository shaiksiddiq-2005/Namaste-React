const RestaurantCard = ({data}) => {
    
    return (
        <div className="ResturantCard">
    
            <img className="res-img" 
                src={data.image}
                alt={data.name}
            />
            <h1>{data.name}</h1>
            <h3>{data.cuisine}</h3>
            <h3>{data.deliveryTime}</h3>  
            <h3>{data.rating}</h3>       
         
        </div>
    );
};


export default RestaurantCard;