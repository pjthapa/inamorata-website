import React from "react";
import {Link} from "react-router-dom";

function AboutPage() {
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/Event" className="nav event">EVENTS</Link>
                <Link to="/About" className="nav about">ABOUT</Link> 
            </div>
            <div className="body content">
                <img src="./images/cassie_making_cocktails.png"
            </div>
        </div>
    )
}

export default AboutPage