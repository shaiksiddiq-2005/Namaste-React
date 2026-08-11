import MenuItems from "./MenuItems";
import {useState} from "react"

const MenuCategories = ({data}) => {

console.log("siddiq ");

const [showItems, setShowItems] = useState(false);


const Accordion =()=>{
    setShowItems(!showItems); // intially showitems have false value, so when the Accodian got clicked then onclick event activates, and the value of showitems will be changed to true, and the items will be shown. and when the accodian got clicked again then the value of showitems will be changed to false, and the items will be hidden.
}

 return (
         <div>
                <div className="w-8/12 mx-auto my-2 p-5 bg-gray-50 shadow-xl text-lg font-bold justify-between rounded-lg hover:bg-gray-100">
                        <div className="flex justify-between cursor-pointer" onClick= {Accordion} >
                            
                            <span>{data.title} ({data.itemCards.length})  </span>
                            <span> {showItems ?"⬆️":"⬇️"} </span>
                        </div>


                         <div className=" justify-between">
                            {
                                showItems && <MenuItems data={data.itemCards}/>
                            }                                
                        </div>


                </div>

                
                
    
        </div>
        )
}

export default MenuCategories;


































//  data.map((item)=>{

//     return(
        
//         <div>

//         <ul>
//             <li key={itemz.card.card.categoryId}>

//                         <h1 className="text-xl font-bold">
//                             {itemz.card.card.title}
//                         </h1>
                            

//                          {item.card.card.itemCards
//                                 .map((foodItem)=>{
//                                 return(
//                                     <h1 key={foodItem.card.info.id}>

//                                     {foodItem.card.info.name} - ₹ {foodItem.card.info.price/100}

//                                      </h1>);
//                                      }
//                                 )
//                             }
                
//                         </li>
            
//         </ul>

//         </div>)
//         })