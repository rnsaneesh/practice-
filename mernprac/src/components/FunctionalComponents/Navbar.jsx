import "../Css/Navbar.css"
const Navbar= () =>{
    return(
        <header>
        <nav style={{listStyleType:"none"}}>
        <li ><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
        
        </nav>
        </header>

    );
}
export default Navbar;