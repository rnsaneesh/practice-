import { Link, useNavigate } from "react-router-dom";
import "../Css/Signup.css";
import axios from "axios";
import { useState } from "react";


function Signup() {
  const navigate=useNavigate();

      var [firstname,setFN]=useState("");
      var [lastname,setLN]=useState("");
      var [email,setEmail]=useState("");
      var[password,setPassword]=useState("");
      var[phn,setPh]=useState(0);

      const handleSignup = async(event) => {
        event.preventDefault();
        const req=await axios.post("https://practice-9kt1.onrender.com/", {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
          phoneNumber: phn,
        });
        const message=req.data.message;
        const isSignup=req.data.isSignUp;
        if(isSignup){
          alert(message);
          navigate("/login");
        }
        else{
          alert(message)
        }
      };
    
    return (
      <div >
        
        <form className="signup-form" onSubmit={handleSignup} action="/" >
        <h2>SignUp</h2>
          <label htmlFor="name">firstName:</label>
          <input type="text" id="name" placeholder="enter a name" onChange={(e)=>setFN(e.target.value)} /><br />

          <label htmlFor="name">lastName:</label>
          <input type="text" id="name" placeholder="enter a name" onChange={(e)=>setLN(e.target.value)} /><br />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="enter a email" onChange={(e)=>setEmail(e.target.value)} /><br />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="enter a password" onChange={(e)=>setPassword(e.target.value)} /><br />
          <label htmlFor="password">mobile:</label>
          <input type="number" id="mobile" placeholder="enter a number" onChange={(e)=>setPh(e.target.value)} /><br />
  
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="Male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="Other" /> Other
          </label>
          <br />
  
          <button type="submit">Submit</button><br />
  
          <label>Are you already a customer? </label>
          <Link to="/login">Login </Link>
        </form>
      </div>
    );
  }
  
  export default Signup;
  