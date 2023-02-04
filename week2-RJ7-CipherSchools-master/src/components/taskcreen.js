import React, { useEffect, useState } from "react";
import { getAllTasks, tasks } from "../apis/testapi";
const Taskscreen=()=>{
    const[alltasks,settasks]=useState([]);
    const[count,setcount]=useState(0);
    useEffect(()=>{
        console.log("Taskscreen is mounted");
        getAllTasks().then((foundtasks) => settasks(foundtasks));
    },[count]);
    // useEffect(()=>{
    //     console.log("Taskscreen is updated");
    //     setcount(5);
    // },[]);
    return(
       alltasks.map ((task,index)=>(
        <div key={index} onClick={(e)=> setcount(count+1)}>
          <h1>{task.tasknumber}{task.taskname}</h1>
          <p>{task.taskdec}</p>
        </div>
       ))
    )
}
export default Taskscreen;