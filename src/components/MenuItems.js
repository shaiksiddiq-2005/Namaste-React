import { addItem } from "../utils/cartSlice";
import {IMG_URL} from"../utils/constants"
import { useDispatch } from "react-redux";


const Menultems=({data})=>{


const dispatch = useDispatch();



    const click = (item)=>{
        dispatch(addItem(item));


    }


    return(
        <div>
            {
                data.map((item)=>(
                    
                    <div key={item.card.info.id} className=" border-b-2 border-gray-200 m-2 p-2 text-left flex justify-between hover:bg-gray-50 rounded-lg">

                        <div className="w-9/12">
                            <div className=" text-gray-600 font-bold"> {item.card.info.name} </div>
                            <div className="font-normal"> ₹{item.card.info.defaultPrice/100||item.card.info.price/100} </div> {/* Price variable is not available for every Item, Some items have defaultPrice variable, So we are using OR operator to check if Price is not available then use defaultPrice. */}
                            <p className="text-sm font-normal"> {item.card.info.description} </p>
                        </div>


                        <div>
                            <button onClick ={ ()=> click(item) }
                            className="absolute rounded-lg p-1 text-xs group flex bg-black  text-white h-6 w-12">
                                 <span className="transition-transform duration-300 group-hover:translate-x-1"> Add → </span>
                            </button>

                            <img className=" w-35 h-auto rounded-xl " src={IMG_URL+item.card.info.imageId} alt="name"/>
                        </div>
                        


                    </div>
                ))
            }
        </div>

    );
}
export default Menultems;