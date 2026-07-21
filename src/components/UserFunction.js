const UserFunction = (props)=>{
    return (
        <div class="user-card">
            <h3>Name: {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Location: Visakhapatnam</h3>
            <h3>Role: Developer </h3>

        </div>
    )
}


export default UserFunction;