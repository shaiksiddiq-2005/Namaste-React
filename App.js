import React from "react";
import ReactDOM from "react-dom/client";



// const myHeading = React.createElement("h1", { id: "myHeading"  }, "Hello world!... from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(myHeading);


// <div id = "parent">
//     <div id ="child1">
//         <h1> Hello1</h1>
//         <h1> Hello2</h1>
//     </div>
//     <div id="child2">
//         <h1> Hello3</h1>
//         <h1> Hello4</h1>
//     </div>
// </div>

console.log("Hello siddiq");

const parent =React.createElement("div", {id: "parent"},
    [
        React.createElement("div", {id: "child1"},
            [
                React.createElement("h1", {}, "Hello1"),
                React.createElement("h1", {}, "Hello2" ),
            ]),

        React.createElement("div", {id: "child2"},
            [
                React.createElement("h1", {}, "Hello3"),
                React.createElement("h1", {}, "Hello4" ),
            ]), 
    ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);


console.log("Hello siddiq");