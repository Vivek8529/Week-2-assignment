import React,{useState} from "react";
import { Link,Outlet} from "react-router-dom";
import { isValid } from "./validators";
const SignUpform =()=>{
    const[state,setstate]=useState({
        fname: "",
        lname: "",
        email:"",
        password:"",
    });
    const [error,seterror]=useState("");
    let handlechange=(e)=>
        setstate({...state,[e.target.name]:e.target.value});
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();;
        if(isValid({...state})){
            console.log("User is valid :",state)
        }
        else {
            seterror("Invalid user");
            console.log("User is not valid");
        }
      }
      }>
        <label>First Name :</label>
        <input
          name={"fname"}
          type="text"
          onChange={handlechange}
          value={state.fname}
          placeholder="Enter your first name"
        />
        <br />
        <label>Last Name :</label>
        <input
          name={"lname"}
          type="text"
          onChange={handlechange}
          value={state.lname}
          placeholder="Enter your last name"
        />
        <br />
        <label>Email :</label>
        <input
          name={"email"}
          type="email"
          onChange={handlechange}
          value={state.email}
          placeholder="Enter your email"
        />
        <br />
        <label>Password :</label>
        <input
          name={"password"}
          type="password"
          onChange={handlechange}
          value={state.password}
          placeholder="Enter your password"
        /><br />
        <button type="submit">Submit</button>
        <span style={{color:"red"}}>{error}</span><br />
        <Link to={"Sum"}>Sum Component</Link>
        <Outlet />
      </form>
    );
}
export default SignUpform;