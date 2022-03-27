import "../styles/navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){
    function displayMenu(){
        let navElement = document.getElementById("navigation")
        if (navElement.className === "navigation"){
            navElement.className += " responsive"
        }
        else{
            navElement.className = "navigation"
        }
    }
    return(
        <div className="navigation" id="navigation">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Link to="/" className="nav elememt home" >HOME</Link>
            <Link to="/event" className="nav element event">EVENTS</Link>
            <Link to="/about" className="nav element about">ABOUT</Link> 
            <a className="nav icon"  onClick={displayMenu}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    )

}