import { useContext }  from "react";
import userDetails from "../utils/contextAPI";




const Footer=()=>{

    const data = useContext(userDetails);

    return(
        <div className = "bg-white hover:bg-gray-100 h-30 text-center p-5">


            <h1>
                FOOTER
            </h1>
            <p> copy rights || All rights reserved || Organic 100% || {data.name} </p>

        </div>

    )
}
export default Footer;