import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
        count :0,
        count1:0,
            };

            console.log(`child ${this.props.name} constructor called`)
    }

    componentDidMount(){
        console.log(`child ${this.props.name} componentDidMount called`);

    }
    

   
    render(){
        console.log(`child ${this.props.name} render called`)

         // const {name, age}=this.props
        return (
            <div className="user-card">
                <h1> Name:{this.props.name}</h1>
                <h2> Age: {this.props.age}</h2>
                <h5>count : {this.state.count}</h5>
                <h5>count1 : {this.state.count1}</h5>

                <button onClick={ ()=>{
                   
                    // NEVER UPDATE THE STATE VARIABLE DIRECTLY USE SETSTATE() FUNCTION;
                        this.setState(
                            { 
                                count: this.state.count + 1,
                                count1: this.state.count1 + 1,
                            }
                        )
                    }
                }> Count Increase</button>
            </div>
        );
    }
}

export default UserClass;

