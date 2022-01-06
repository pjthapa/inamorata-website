import React from "react";
import HomePage from "../pages/home";

function CreateCard(props){

    return(
        <div className="card">
            <img src={props.image} alt={`${props.image}`} className="img"/>
            <div className="container">
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default CreateCard