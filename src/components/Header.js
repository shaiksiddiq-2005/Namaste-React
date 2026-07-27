import { LOGO_URL, MAIN_LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";


const Header =()=>{



let [btnName, setbtnName]=useState("Login");
console.log("header rended");

useEffect(()=>{
    console.log("use effect called", btnName);
},[btnName]);

const OnlineStatus = useOnlineStatus();

    return (
        <div className="heading">

            <div id="logo">
                <img className="logo-img"
                src={MAIN_LOGO_URL}
                />
            </div>

            <div className ="nav-items">
                
                <ul>
                    <li> {OnlineStatus ? "🍏Online " : "🔴Offline "} </li>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About Us </Link> </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li> Cart </li>
                    <li>
                       <button className="login-btnName" 
                                onClick={()=>{
                                     btnName==="Login" ? setbtnName("logOut"):setbtnName("Login");
                       }}>
                        {btnName} 
                        
                        </button>
                    </li>
                </ul>
                
                
            </div>
        </div>
    )
}

export default Header;