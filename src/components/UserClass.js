import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
         
        this.state={
            infodata:{
                name:"dummy name",
                login:"dummy login",
                bio:"dummy bio",
                avatar_url:"https://avatars.githubusercontent.com/u/115770064?v=4",
            }
        }
            console.log("constructor");
    }

   async componentDidMount(){

    const data = await fetch("https://api.github.com/users/shaiksiddiq-2005");
    const jsondata = await data.json();
    

    this.setState({
        infodata:jsondata,
    });
    console.log("componentDidMount");

    console.log(jsondata);
}

componentDidUpdate(){
    console.log("componentDidUpdate");
}


componentWillUnmount(){
    console.log("componentWillUnmount");
}

    
    render(){
        console.log("render");


         const {name, login, bio, avatar_url} = this.state.infodata;
         
        return (
            <div className="user-card">
                <img src={avatar_url} alt={name} height="50px" width="50px"/>
                <h4> Name:{name}</h4>
                <h4> userName: {login}</h4>
                <h4> Bio: {bio}</h4>
                <h3> Contact : 8125276786</h3>
                
            </div>
        );
    }
}

export default UserClass;

