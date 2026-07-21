import {useState} from "react";

const UserFunction = (props)=>{
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h5>count:{count}</h5>

            <h3>Name: {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Location: Visakhapatnam</h3>
            <h3>Role: Developer </h3>
            <button onClick={() =>
               {
                setCount(count+1)
                }
            }> Count Increase</button>
            


        </div>
    )
}


export default UserFunction;