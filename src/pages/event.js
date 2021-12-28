import React from "react";
import {Link} from "react-router-dom";

function EventPage() {
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>
                <Link to="/about" className="nav about">ABOUT</Link> 
            </div>
        </div>
    )
}

export default EventPage