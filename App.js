import React from "react";
import ReactDOM from "react-dom/client";

//Functional Component Composition


//Component One 
const Title = ()=> (
     <h1>Title</h1>
)

// Component Two
const Heading=() =>{ return( 

    <div  id="Container">

     <Title/> { /*Composing the components with one another* */}

    <h1 id="Heading1">Heading</h1>
    
    </div>
)
}



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Heading/>);


console.log("Hello siddiq");