import UserFunction from "./UserFunction"
import UserClass from "./UserClass"

const About=()=>{
    return (
        <div>
            <h1> About Page</h1>
            <h3> Welcome To Food App</h3>
            <UserFunction
                name ={"shaik siddiq"}
                age = {20}
            />

            <UserClass 
                name={"siddiq"}
                age = {20}
            />
        </div>
    );
};

export default About;