import UserFunction from "./UserFunction"
import UserClass from "./UserClass"

    


import React from "react";

class About extends React.Component{
    constructor(){
        super();
        console.log("Parent constructor Called");
    }

    componentdidMount(){
        console.log("Parent componentdidMount Called");
    }

    render(){
        console.log("Parent Render Called");
        return (
        <div>
            <h1> About Page</h1>
            <h3> Welcome To Food App</h3>


            <UserFunction
                name ={"shaik siddiq"}
                age = {20}
            />

            <UserClass 
                name={"first"}
                age = {20}
            />

            <UserClass 
                name={"second "}
                age = {20}
            />

            <UserClass 
                name={"third"}
                age = {20}
            />

        </div>
    );
};
    }


export default About;



// ComponentDidMount process

// -child first constructor called
// -child first render called
// -child second  constructor called
// -child second  render called
// -child third constructor called
// -child third render called
// -child first componentDidMount called
// -child second  componentDidMount called
// -child third componentDidMount called