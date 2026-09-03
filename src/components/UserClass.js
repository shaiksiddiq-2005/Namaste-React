import React from "react";
import userDetails from "../utils/contextAPI";

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
            // console.log("constructor");
    }

   async componentDidMount(){

    const data = await fetch("https://api.github.com/users/shaiksiddiq-2005");
    const jsondata = await data.json();
    

    this.setState({
        infodata:jsondata,
    });
   // console.log("componentDidMount");

    // console.log(jsondata);
}

componentDidUpdate(){
     // console.log("componentDidUpdate");
}


componentWillUnmount(){
   // console.log("componentWillUnmount");
}

    
    render(){
       // console.log("render");


         const {name, login, bio, avatar_url} = this.state.infodata;
         
        return (




            <div className="flex justify-between border-2 border-black m-4 px-50 "> 
                <div>
                    <img src={avatar_url} alt={name} height="200px" width="200px" className="m-4 p-4"/>
                </div> 

                

                <div className="m-4 p-4"> 
                    <h1 className="font-bold">This part is made up of class based components</h1>
                    <h4> Name:{name}</h4>
                    <h4> userName: {login}</h4>
                    <h4> Bio: {bio}</h4>
                    <h3> Contact : 8125276786</h3>
                </div>



                <div className="m-4 p-4">   {/* This part is made up of context API, Using Consumer */}
                    <b>loggedIn User: </b>
                    <userDetails.Consumer>                
                        {(user) => <div><h1> {user.name} </h1>
                        <h1> {user.name} </h1></div>
                        } 
                        
                    </userDetails.Consumer>
                </div>

            </div>
        );
    }
}

export default UserClass;

