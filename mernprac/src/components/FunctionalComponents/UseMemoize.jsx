import useMemoize from "./CustomHooks/Memorizing"

const UseMemoize =()=>{
    var [custid,setCustID]=useMemoize("CustomerID","")
    var[pass,setPass]=useMemoize("Password","")
    const handleEvent=()=>{
        console.log(custid,pass)
        localStorage.removeItem("CustomerID")
        localStorage.removeItem("Password")
    }
    return(
        <div>
            <h1>This is a custom hook designed using useSate</h1>
            Customer ID : <input type="text" value={custid} onChange={(e)=>setCustID(e.target.value)} /><br/>
            Password : <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/> <br />
            <button type ="submit">Login</button>
        </div>
    );
};
export default UseMemoize;