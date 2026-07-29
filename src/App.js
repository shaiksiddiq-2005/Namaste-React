import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"; 
import {lazy, Suspense} from "react";  // so that we can use Lasy ans Suspense, Lazy is is used to distribute the load which is on the main application and Suspense is used to show the content when the code is not available to display.
import Shimmer from "./components/Shimmer"; // Shimmer is a component which is used to display the loading state of the application when the content is not available or taking time to diplay. so that the user experience will be good.

import "../index.css"; // To import the TailwindCss from the file index.css


// import Instamart from "./components/Instamart";
// import Grocerys from "./components/grocery";

const Instamart = lazy(()=> import("./components/Instamart"));  // Lazy loading or code splitting is a technique in React that allows you to load components only when they are needed, rather than loading them all at once. This can improve the performance of your application by reducing the initial load time and improving the user experience.

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=> {
    return (
        <div className="applayout">
        <Header/>
        <Outlet/>

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













