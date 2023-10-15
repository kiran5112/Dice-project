import React, { useEffect, useState } from "react";
import axios from 'axios' 

function Pro(){
const[list,setList]=useState([]) 

useEffect(()=>{
    axios.get("https://dummyjson.com/products").then(res=>{
        setList(res.products.data)
        console.log(res.products.data);
    })

    
})
    
    return(
        <div>


        </div>
    )
};
 export default Pro;