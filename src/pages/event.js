import React from "react";
import {Link} from "react-router-dom";

function EventPage() {
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/HomePage" className="nav home">HOME</Link>
                <Link to="/EventPage" className="nav event">EVENTS</Link>
                <Link to="/AboutPage" className="nav about">ABOUT</Link> 
            </div>
        </div>
    )
}

export default EventPage