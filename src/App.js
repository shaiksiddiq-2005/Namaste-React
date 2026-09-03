import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from"./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"; 
import {lazy, Suspense} from "react";  // so that we can use Lasy ans Suspense, Lazy is is used to distribute the load which is on the main application and Suspense is used to show the content when the code is not available to display.
import Shimmer from "./components/Shimmer"; // Shimmer is a component which is used to display the loading state of the application when the content is not available or taking time to diplay. so that the user experience will be good.
import {useState, useEffect} from "react";


import "../index.css"; // To import the TailwindCss from the file index.css


// import Instamart from "./components/Instamart";
// import Grocerys from "./components/grocery";

const Instamart = lazy(()=> import("./components/Instamart"));  // Lazy loading or code splitting is a technique in React that allows you to load components only when they are needed, rather than loading them all at once. This can improve the performance of your application by reducing the initial load time and improving the user experience.
const Grocery = lazy(()=> import("./components/Grocery"));

import userDetails from "./utils/contextAPI"; // importing the context API from the utils folder to use it in the application.




const AppLayout = ()=> {

// Provider example, it is used to override the default value of the context API and pass the value to the child components. The value passed to the provider will be available to all the child components of the provider. The value can be accessed using the useContext hook in the child components.
const [UserName, setUserName] = useState(""); // using the useState hook to set the userName state and setUserName function to update the userName state.
useEffect( ()=>{
        const data={ // Dummy object, to set the userName state to the data object which is created below.
                        userName: "sid",
                        age: 20,
                        location: "Visakhapatnam",
                        role: "Developer"
                    }
                        setUserName(data.userName); // setting the userName state to the data object which is created above.
    }, []);


    return (
        <div className="applayout">

       {/*  <userDetails.Provider value={{name: UserName}}> 
                <Header/> //Owner name is --> Sid

                    <userDetails.Provider value={{name:"Akshay Saini"}}>
                        <Outlet/>  // Owner name is --> Akshay Saini 
                    </userDetails.Provider>

            </userDetails.Provider> 

            <Footer/>  //  Owner name is --> Default 

        */}


            <userDetails.Provider value={{name: UserName, setUserName}}> 
            <Header/> 
            <Outlet/>  
            <Footer/> 
            </userDetails.Provider> 
            

        </div>
    );
};









const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element:<Body />
            },
            {
                path:"/instamart",
                element:( <Suspense fallback={<Shimmer/>} > <Instamart/> </Suspense>) // when the code is not available to display then the content inside the fallback will be displayed suchas shimmer until the code is available to display.
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1> Loading....</h1>}> <Grocery/>  </Suspense>)  // when the code is not available to display then the content inside the fallback will be displayed until the code is available to display.
            }
                ],

    },
    

])

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);







