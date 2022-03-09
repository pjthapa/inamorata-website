import React from "react";
import {Link} from "react-router-dom";
import cassie_making_cocktails from '../images/cassie_making_cocktails.png'
import Logo from "../components/logo";

function AboutPage() {
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/Event" className="nav event">EVENTS</Link>
                <Link to="/About" className="nav about"style={{background :"#f3feff", paddingLeft:"2rem", paddingRight:"2rem"}}>ABOUT</Link> 
            </div>
            <Logo /> 
            <div className="bodyContent">
                <img src={cassie_making_cocktails}  alt="Cassie Making a Cocktail"/>
            </div>
        </div>
    )
}

export default AboutPage