import React from "react";

//function based state
function User() {
    const [name, setName] = React.useState("sakthi");
    const [age, setAge] = React.useState(24);
    // const [state, setState] = React.useState({ name: "sakthi", age: 24 });


    const changeName=()=>{
        setName("ananth")
    }
    // const changeName = () => {
    //     setState({ ...state, name: "ananth" });
    // }
    return (
        <div>
            <p>name={name}</p>
            <p>age={age}</p>
            <button onClick={changeName}>changeName</button>
        </div>


        // <div>
        //     <p>name={state.name}</p>
        //     <p>age={state.age}</p>
        //     <button onClick={changeName}>changeName</button>
        // </div>
    );
}

// class based state
// class User extends React.Component{
//     constructor(props){
//     super(props);
//     this.state={
//         name:"sakthi",
//         age:24,
//     };
// }

// changeName=()=>{
//     this.setState({name:"ananth"});
// }

// render(){
//     return(
//         <div>
//             <p>name={this.state.name}</p>
//             <p>age={this.state.age}</p>
//             <button onClick={this.changeName}>changeName</button>
//         </div>
//     );
// }
// }

export default User;