import {useState} from "react";

const UserFunction = (props)=>{
    const [count, setCount] = useState(0);
    return (
        <div className="border-2 border-black m-4 p-4">
            
            <h1 className="font-bold ">This part is made up of Function based components</h1>
            <h5>count:{count}</h5>

            <h3>Name: {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Location: Visakhapatnam</h3>
            <h3>Role: Developer </h3>
            <button onClick={() =>
               {
                setCount(count+1)
                }}
            className="bg-blue-500 text-white p-2 rounded"> Count Increase</button>
            


        </div>
    )
}


export default UserFunction;