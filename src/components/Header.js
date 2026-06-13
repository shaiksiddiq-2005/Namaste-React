import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header =()=>{



let [btnName, setbtnName]=useState("Login");








    return (
        <div className="heading">

            <div id="logo">
                <img className="logo-img"
                src={LOGO_URL}
                />
            </div>

            <div className ="nav-items">
                
                <ul>
                    <li> Home </li>
                    <li> About Us </li>
                    <li> Contact Us</li>
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