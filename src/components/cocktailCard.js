import React from "react";
import HomePage from "../pages/home";

function CreateCard(props){

    return(
        <div className="card">
            <img src={props.image} alt={`${props.image}`} className="img"/>
        </div>
    )
}

export default CreateCard