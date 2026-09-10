import {configureStore} from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";


const reduxStore = configureStore({
    reducer : {
        cart : cartReducers,
    }

});

export default reduxStore;