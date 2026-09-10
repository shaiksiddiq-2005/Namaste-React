import { useSelector } from "react-redux";
import Menultems from "./MenuItems";
import { useDispatch } from "react-redux";
import { clear } from "../utils/cartSlice";
import Shimmer from "./Shimmer";



const Cart = () =>{

const addedItem = useSelector( (store) => store.cart.items); // addedItem is an Array, we get it from the reduxStore.

const itemPrice = addedItem.map ( (i) => i.card.info.price/100 || i.card.info.defaultPrice/100  );  // itemPrice contains an array of item prices ex:- [10,20,30]

const totalValue = itemPrice.reduce( (acc,curr) =>{ // Applying reduce method to the itemPrice array so that we can add the elements inside an array, and display the totalValue.
    return acc+curr;
},0);




// let sum = 0;
//  for ( let i=0; i < total.length; i++){
//     sum = sum + total[i] ;
//  }

const dispatch = useDispatch()

const clearCart = ()=>{
    dispatch(clear());
   
}

    return totalValue ==0 ?
            <h1 className="text-center font-bold m-20 p-20" > 
                 Hey! Your cart is looking a little empty 😋 Add some delicious items to get started!
            </h1> :
            (
                <div className=" font-bold text-2xl m-5 text-center">

                    <h1> Cart Items </h1>

                    <div>
                        <button 
                        onClick={ ()=> clearCart()}
                        className=" bg-orange-600 rounded-lg hover:bg-black text-white p-1"> Clear Cart! 
                        </button>

                        <Menultems data={addedItem}/>

                        <br/>

                        <div className="">
                                <h1> Cart Checklist</h1>
                                {
                                    addedItem.map( (x) => ( 
                                        <p className="font-semibold text-sm" key= {x.card.info.id}>

                                            {x.card.info.name} - {x.card.info.price/100 || x.card.info.defaultPrice/100}

                                        </p>
                                        ))
                                } 
                        </div>

                        <br/>

                        <h1 className=""> Total CartValue = {totalValue}</h1>

                    </div>


                </div>
             );
}
export default Cart;