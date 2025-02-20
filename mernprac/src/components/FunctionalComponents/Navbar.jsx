import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li className="dropdown">
            <span>Hooks </span>
            <ul className="dropdown-menu">
              <li><Link to="/use-state">useState</Link></li>
              <li><Link to="/use-effect">useEffect</Link></li>
              <li><Link to="/use-api">useEffectApi</Link></li>
              <li><Link to="/use-ref">useRef</Link></li>
              <li><Link to="/use-memo">Usememo</Link></li>
            </ul>
          </li>

          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
