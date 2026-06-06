import React from "react";
import ReactDOM from "react-dom/client";

//Functional Components



// function Heading(){
//     return <h1>Hello Functional Components</h1>;
// }

const Heading1=() =>{ return( 

    <div  id="Container">
    <h1 id="Heading1">Hello Arrow Functional components</h1>
    <h2 id="Heading2">hello siddiq</h2>
    <h3 id="Heading3">Xyang</h3>
    </div>
)
}


// const Heading2=()=> <h1>Hello arrow shortcut functional component</h1>;



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Heading2/>);


console.log("Hello siddiq");