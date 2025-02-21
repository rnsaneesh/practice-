import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Login.css";

function Login(){
    
    
    return(
        <div>
            <form className="login-form">
            <h1>Login</h1>
    
   <label for="name">Username:</label>
    <input name="name" type="text" placeholder="enter a name" />

    <label for="password">Password:</label>
    <input type="password" placeholder="enter a password" />

    <button type="submit">Submit</button><br />
    <label>Create a new Account </label>
          <Link to="/signup">Signup</Link>
</form>
        </div>
    );
}
export default Login;