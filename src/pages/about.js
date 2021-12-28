import React from "react";
import {Link} from "react-router-dom";
import cassie_making_cocktails from '../images/cassie_making_cocktails.png'

function AboutPage() {
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/Event" className="nav event">EVENTS</Link>
                <Link to="/About" className="nav about">ABOUT</Link> 
            </div>
            <div className="bodyContent">
                <img src={cassie_making_cocktails}  alt="Cassie Making a Cocktail"/>
            </div>
        </div>
    )
}

export default AboutPage