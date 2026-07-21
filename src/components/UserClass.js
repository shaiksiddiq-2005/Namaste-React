import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

         // const {name, age}=this.props
        return (
            <div className="user-card">
                <h1> Name:{this.props.name}</h1>
                <h2> Age: {this.props.age}</h2>
            </div>
        );
    }
}

export default UserClass;