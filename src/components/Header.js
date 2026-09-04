import { LOGO_URL, MAIN_LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";
import userDetails from "../utils/contextAPI";





const Header =()=>{

const data = useContext(userDetails);



let [btnName, setbtnName]=useState("Login");


useEffect(()=>{
    console.log("use effect called", btnName);
},[btnName]);

const OnlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between border bg-white h-24">

            <div id="logo">
                <img className="w-23 hover:scale-110 transition-all duration-500 ease-in-out"
                src={MAIN_LOGO_URL}
                />
            </div>

            <div className ="nav-items">
                
                <ul className="flex gap-6 m-4 p-4 hover:text-orange-600 text-gray-700 font-semibold text-lg">

                    <li> {OnlineStatus ? "🍏Online " : "🔴Offline "} </li>

                    <li className="relative w-fit cursor-pointer group" >
                    <Link to="/">Home</Link> 
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className= "relative w-fit cursor-pointer group">
                    <Link to="/about">About Us </Link> 
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className= "relative w-fit cursor-pointer group">
                    <Link to="/contact">Contact Us</Link> 
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className= "relative w-fit cursor-pointer group">
                    <Link to="/instamart"> Instamart </Link> 
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className= "relative w-fit cursor-pointer group">
                    <Link to="/grocery">Grocery</Link> 
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className= "relative w-fit cursor-pointer group">
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    Cart </li>

                    <li >
                       <button className="hover:border-1 px-1 hover:border-black rounded-xl" 
                                onClick={()=>{
                                     btnName==="Login" ? setbtnName("logOut"):setbtnName("Login");
                       }}>
                        {btnName} 
                        </button>
                    </li>


                    <li> Owner: {data.name}  </li>
                  
                </ul>

                
                
                
            </div>
        </div>
    )
}

export default Header;