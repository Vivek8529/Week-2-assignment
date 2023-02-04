import { func } from "prop-types";
import React,{Component,useState} from "react";
class Name extends Component{
    state={
        name:"Lav Kumar"
    }
    constructor(props){
        super(props);
        this.setName=this.setName.bind(this)
    }
    setName(name){
        this.setState({...this.state,name})
    }
    testhandler=()=>{
        console.log("Testhandler");
    }
    render(){
        return(
            <>
            <h1>
                The name is:{this.state.name}
            </h1>
            <button onClick={()=>{
                this.setName("Guddu Pandit");
                this.testhandler();
            }}>Click Me</button>
            </>
        )
    }
}

// const Name =()=>{
//     const [state,setState]=useState({name:"Lav Kumar"});
//     let setName=(e)=>{
//         setState({...state,name:"Guddu"});
//     }
//     return(
//         <>
//         <h1>The name is: {state.name}</h1>
//         <button onClick={setName}>Click Me</button>
//         </>
//     )
// }
export default Name;