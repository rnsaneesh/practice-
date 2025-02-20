import {useState, useRef, useEffect} from "react"
const UseRef = ()=>{
    var [text,setText]=useState("");
    var prev =useRef();

    useEffect(()=>{
        prev.current=text;
        console.log(prev.current);
    },[text]);
    return(
        <div>
        <h1>This is useref</h1>
            type ur text :{" "}
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
            <h2>the current render is {text}</h2>
            <h3> the prev render is {prev.current}</h3>

            </div>
    );
};
export default UseRef;