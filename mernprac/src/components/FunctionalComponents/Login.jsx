import { useState } from "react";

function Login(){
    var s="";
    var [string,setstring]=useState(s);
    function res(){
        var c=document.getElementById("abc").value;
        setstring(string+c)
    }
    return(
        <div>
            <h1>Login</h1>
            <label >enter smthg:</label>
            <input  id ="abc" type="text" />
            <button onClick={res}>add</button>
            <p>the string is :{string}</p>
            <button onClick={()=> setstring(s)}>reset</button>


        </div>
    );
}
export default Login;