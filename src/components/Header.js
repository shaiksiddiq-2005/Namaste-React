import { LOGO_URL, MAIN_LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userDetails from "../utils/contextAPI";

import { useSelector } from "react-redux";

const Header = () => {

    const data = useContext(userDetails);

    let [btnName, setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border bg-gray-100 min-h-24 w-full">

            <div id="logo" className="shrink-0">
                <img
                    className="w-16 sm:w-20 md:w-23 hover:scale-110 transition-all duration-500 ease-in-out"
                    src={MAIN_LOGO_URL}
                />
            </div>

            <div className="nav-items min-w-0">

                <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 m-2 sm:m-3 md:m-4 p-2 sm:p-3 md:p-4 hover:text-orange-600 text-gray-700 font-semibold text-sm sm:text-base md:text-lg">

                    <li>
                        {OnlineStatus ? "🍏Online " : "🔴Offline "}
                    </li>

                    <li className="relative w-fit cursor-pointer group">
                        <Link to="/">Home</Link>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative w-fit cursor-pointer group">
                        <Link to="/about">About Us</Link>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative w-fit cursor-pointer group">
                        <Link to="/contact">Contact Us</Link>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative w-fit cursor-pointer group">
                        <Link to="/instamart">Instamart</Link>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative w-fit cursor-pointer group">
                        <Link to="/grocery">Grocery</Link>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative w-fit cursor-pointer group">
                        <Link to="/cart">Cart-{cartItems.length} items</Link>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li>
                        <button
                            className="hover:border-1 px-1 hover:border-black rounded-xl"
                            onClick={() => {
                                btnName === "Login"
                                    ? setbtnName("logOut")
                                    : setbtnName("Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>

                    <li>
                        Owner: {data.name}
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Header;