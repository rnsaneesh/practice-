import { Link } from "react-router-dom";
import "../Css/Signup.css";

function Signup() {
    
    return (
      <div >
        
        <form className="signup-form" >
        <h2>SignUp</h2>
          <label htmlFor="name">Username:</label>
          <input type="text" id="name" placeholder="enter a name" /><br />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="enter a email" /><br />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="enter a password" /><br />
  
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
  