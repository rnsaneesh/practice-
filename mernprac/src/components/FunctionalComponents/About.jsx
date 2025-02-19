import { useState } from "react";

function About(){
    var s=0;
    var [num,setnum]=useState(s)
    return(
        <div>
            
            <h1>About</h1>
            <h2>state inital value is {s}</h2>
            <button onClick={()=> setnum(num-1)}>-</button>
            <h3>updating state: {num}</h3>
            <button onClick={()=> setnum(num+1)}>+</button>
            <br />
            <button onClick={()=>setnum(s)}>reset</button>
            
        </div>
    );
}
export default About;