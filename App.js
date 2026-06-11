import React from "react";
import ReactDOM from "react-dom/client";

const Heading =()=>{
    return (
        <div className="heading">
            <div id="logo">
                <img className="logo-img" src="data:image/png;base64,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" alt="Logo" />
            </div>
            <div className ="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About Us </li>
                    <li> Contact Us</li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
}

const restaurants = [
  {
    name: "Pizza Hut",
    cuisine: "Italian",
    deliveryTime: "30 mins",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    name: "Domino's",
    cuisine: "Pizza",
    deliveryTime: "25 mins",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    name: "KFC",
    cuisine: "Fast Food",
    deliveryTime: "20 mins",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    name: "Biryani House",
    cuisine: "Indian",
    deliveryTime: "35 mins",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
  },
  {
    name: "Burger King",
    cuisine: "Burgers",
    deliveryTime: "22 mins",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Subway",
    cuisine: "Sandwiches",
    deliveryTime: "28 mins",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569"
  },
  {
    name: "Paradise Biryani",
    cuisine: "Hyderabadi",
    deliveryTime: "40 mins",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d"
  },
  {
    name: "Mehfil",
    cuisine: "Indian",
    deliveryTime: "32 mins",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
  },
  {
    name: "Wow Momo",
    cuisine: "Chinese",
    deliveryTime: "24 mins",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb"
  },
  {
    name: "Taco Bell",
    cuisine: "Mexican",
    deliveryTime: "26 mins",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
  },
  {
    name: "Haldiram's",
    cuisine: "North Indian",
    deliveryTime: "30 mins",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    name: "Barbeque Nation",
    cuisine: "Barbecue",
    deliveryTime: "45 mins",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd"
  },
  {
    name: "McDonald's",
    cuisine: "Fast Food",
    deliveryTime: "20 mins",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330"
  },
  {
    name: "Cream Stone",
    cuisine: "Ice Cream",
    deliveryTime: "19 mins",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
  },
  {
    name: "Starbucks",
    cuisine: "Coffee",
    deliveryTime: "25 mins",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },

  {
    name: "The Belgian Waffle Co.",
    cuisine: "Desserts",
    deliveryTime: "21 mins",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d"
  },
  {
    name: "Royal Tiffins",
    cuisine: "South Indian",
    deliveryTime: "17 mins",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    name: "Chinese Wok",
    cuisine: "Chinese",
    deliveryTime: "29 mins",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  }
];


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


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search restaurants..." />
            </div>

            <div className="res-container">

            {restaurants.map((restaurant, index) => (

                <RestaurantCard 
                key={restaurant.name} //key={index} // not using key(not Acceptable) <<<< using index as key  <<<< using unique id (Best pratice)
                data={restaurant} />
            ))}

            </div>
        </div>
    );
};


const AppLayout = ()=> {
    return (
        <div className="applayout">
        <Heading/>
        <Body/>

        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout/>);













