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
        <div className="text-center m-20 p-5">
            <h1 className="text-3xl  m-5 font-bold  ">  About Page</h1>
            

            <h3 className="text-2xl"> Welcome To Food App</h3>
            <br/>

             
            <UserFunction
                name ={"shaik siddiq"}
                age = {20}
            />
            {/* This part is made up of class based components */}
            <UserClass 
                name={"first"}
                age = {20}
            />

        </div>
    );
};
    }

export default About;
