import React from "react";
import {Link} from "react-router-dom";
import cassie_making_cocktails from '../images/cassie_making_cocktails.png'
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
                <img src={cassie_making_cocktails}  alt="Cassie Making a Cocktail"/>
            </div>
        </div>
    )
}

export default AboutPage