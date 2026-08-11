import {IMG_URL} from"../utils/constants"
const Menultems=({data})=>{


    const shaik=()=>{
        console.log("Added to cart")
    }
    return(
        <div>
            {
                data.map((item)=>(
                    
                    <div key={item.card.info.name} className=" border-b-2 border-gray-200 m-2 p-2 text-left flex justify-between hover:bg-gray-50 rounded-lg">

                        <div className="w-9/12">
                            <div className=" text-gray-600 font-bold ">{item.card.info.name} </div>
                            <div className="font-normal"> ₹{item.card.info.defaultPrice/100||item.card.info.price/100} </div> {/* Price variable is not available for every Item, Some items have defaultPrice variable, So we are using OR operator to check if Price is not available then use defaultPrice. */}
                            <p className="text-sm font-normal ">{item.card.info.description}</p>
                        </div>

                        <div>
                            
                            <button onClick= {shaik} className="absolute bg-white hover:bg-gray-100 rounded-lg p-1 text-xs text-green-700  "> Add+ </button>

                            <img className=" w-35 h-auto rounded-xl" src={IMG_URL+item.card.info.imageId} alt="name"/>
                        </div>
                        


                    </div>
                ))
            }
        </div>

    );
}
export default Menultems;