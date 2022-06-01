import React from "react";
import {Link} from "react-router-dom";
import Logo from "../components/logo";
import Navbar from "../components/navbar";

function AboutPage() {
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Navbar />
            </div>
            <Logo /> 
            <div className="bodyContent">
            </div>
        </div>
    )
}

export default AboutPage