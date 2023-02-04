import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getPhotos } from "../apis/api";
const Photos = () =>{
    const[photolist,setphotolist]=useState([]);
    const[isloading,setloading]=useState(true);
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/photos",{
        //     method:"GET",headers :{}
        // })
        //   .then((response) => response.json())
        //   .then((json) => setphotolist(JSON.parse(json))).finally(()=>setloading(false))

        // Axios.get("https://jsonplaceholder.typicode.com/photos").then((response) =>{
        //     let foundphotos=response.data;
        //     setphotolist(foundphotos);
        // }).catch((error) =>console.log(error)).finally(()=>setloading(false));
        getPhotos()
          .then((response) => {
            let foundphotos = response.data;
            setphotolist(foundphotos);
          })
          .catch((error) => console.log(error))
          .finally(() => setloading(false));
    },[]);
    if(isloading) {
        return<h3>Loading....</h3>
    }

    return (
        <div>
            {photolist.map((photo,index) =>{
                <div key={index}>
                    <img src={photo.url} alt={photo.title} />
                </div>
            })}
        </div>
    )
}
export default Photos;