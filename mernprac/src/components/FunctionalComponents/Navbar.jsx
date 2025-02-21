import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  var[dropdown,showDropDown]=useState(false);
  return (
    <header>
      <nav>
        <ul>
        <li ><Link to="/" className="link">Home</Link></li>
        <li ><Link to="/about" className="link">About</Link></li>
          <li >
          <div className="dropdown" onMouseEnter={()=>showDropDown(!dropdown)} onMouseLeave={()=>showDropDown(!dropdown)}>
            <span className="link">Hooks </span>
            { dropdown && (
            <ul className="dropdown-list">
              <li><Link to="/use-state" className="dropdown-link">useState</Link></li>
              <li><Link to="/use-effect" className="dropdown-link">useEffect</Link></li>
              <li><Link to="/use-api" className="dropdown-link">useEffectApi</Link></li>
              <li><Link to="/use-ref" className="dropdown-link">useRef</Link></li>
              <li><Link to="/use-memo" className="dropdown-link">Usememo</Link></li>
              <li><Link to="/use-memoize" className="dropdown-link">Usememoize</Link></li>
            </ul>
                )}
            </div>
            </li>
        
            <li><Link to="/hoc" className="link">HoC</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
          <li><Link to="/signup" className="link">Signup</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
