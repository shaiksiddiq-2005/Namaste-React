import { createContext } from "react";


const userDetails = createContext({
    name: "default",  
    age: 21,
}); 

export default userDetails;