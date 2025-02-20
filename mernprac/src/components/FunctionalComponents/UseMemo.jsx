import { useState,useMemo } from "react"

const UseMemo =()=>{
    var [num,SetNum]=useState(0);
    var [theme,SetTheme]=useState(false);
    var styling={
        backgroundColor : theme ? "black ": "white",
        color : theme ? "white" : "black"
    }
  
    return(
        
        <div style={styling}>
        <button onClick={()=> SetTheme(!theme)}>Toggle Theme</button>
            <h1>this is usememo</h1>
            Number Box: {" "}
            <input type="number" value={num} onChange={(e)=>SetNum(e.target.value)} />
            <h2>the number is :{num}</h2>

        </div>
        
    );
};
export default UseMemo;