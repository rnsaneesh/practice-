import { useState } from "react";

function UseState() {
    var s=0;
    var [num,setnum]=useState(s)
    {/* var s="";
    var [string,setstring]=useState(s);
    function res(){
        var c=document.getElementById("abc").value;
        setstring(string+c)}*/}
    return(
        <div>
            <h1>this is useState</h1>
            
            <h2>state inital value is {s}</h2>
            <button onClick={()=> setnum(num-1)}>-</button>
            <h3>updating state: {num}</h3>
            <button onClick={()=> setnum(num+1)}>+</button>
            <br />
            <button onClick={()=>setnum(s)}>reset</button>

            {/* <label >enter smthg:</label>
            <input  id ="abc" type="text" />
            <button onClick={res}>add</button>
            <p>the string is :{string}</p>
            <button onClick={()=> setstring(s)}>reset</button>
*/}
            
        </div>
    );

}
export default UseState;