import UserFunction from "./UserFunction"
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
    constructor(){
        super();
       
    }

    componentdidMount(){
    }

    render(){
    
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

        </div>
    );
};
    }

export default About;
