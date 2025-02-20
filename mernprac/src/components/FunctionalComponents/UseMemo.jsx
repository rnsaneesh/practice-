import { useState,useMemo } from "react"

function slowFunction(num){
    for(var i = 0;i<1000;i++){}
    return num*2
}

const UseMemo =()=>{
    var [num,SetNum]=useState(0);
    var [theme,SetTheme]=useState(false);
    var styling={
        backgroundColor : theme ? "black ": "white",
        color : theme ? "white" : "black"
    }
    var doublingUpANumber = useMemo(()=>{
        return slowFunction(num)
      },[num])
  
    return(
        
        <div style={styling}>
        <button onClick={()=> SetTheme(!theme)}>Toggle Theme</button>
            <h1>this is usememo</h1>
            Number Box: {" "}
            <input type="number" value={num} onChange={(e)=>SetNum(e.target.value)} />
            <h2>the number is :{num}</h2>
            <h2>The number is {doublingUpANumber}</h2>

        </div>
        
    );
};
export default UseMemo;