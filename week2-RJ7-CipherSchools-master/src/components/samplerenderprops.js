import React  from "react";
import Renderprops from "./Renderpropscomponent";
import {useCookies} from "react-cookie"
const Samplerenderprops =()=>{
    const [cookies,setcookies,removecookies]=useCookies(["name"]);
    console.log(cookies);
        return(
            <Renderprops render={()=>{
            return(
                <div>
                    <h2 onClick={(e)=>{
                        setcookies("age",21);
                    console.log("Cookies")}
                    }>This is from render props</h2>
                </div>
            )
        }} />
        )
}
export default Samplerenderprops;