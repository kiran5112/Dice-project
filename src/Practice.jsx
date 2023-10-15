import React, { useEffect } from "react";
import { useState } from "react";

function Practice() {
    const[list,setList]=useState(null) 
function add(val){
    setList(val.target.value)
}
    return (
        <div>
            <h1>jok  {list}</h1>
<input onChange={add} type="text"/>

        </div>
    )
};
export default Practice;