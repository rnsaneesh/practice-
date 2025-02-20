import { useEffect, useState } from "react";
const UseEffect = () => {
  var [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  },[text]);
  return (
    <section>
      <h1>This is useEffect Example</h1>
      Type your Text:{" "}
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        
      />
      <h3>the value is {text}</h3>
    </section>
  );
};
export default UseEffect;