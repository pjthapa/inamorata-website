import React, { useState } from "react";
import {Link} from "react-router-dom";

function BackPage() {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');

    //create function to add drink
    const addDrink = async() => {
        const newDrink = {name, amount, unit}

        const response = await fetch("/cocktail", {
            method: 'POST',
            body: JSON.stringify(newDrink),
            headers:{
                'Content-Type': 'application/json'
            }
        
        });
        console.log(response)
        
        if (response.status === 201){
            alert(`Added ${name} to the Ingredients List`)
        }
        else{
            alert(`Failed to add the drink. Please try again.`)
        }
    }
 
    // add exercise function

    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>
                <Link to="/about" className="nav about">ABOUT</Link> 
            </div>
            <div className="page container">
                <h2> Add Youtube Video URL </h2>
                <input type="text" placeholder="YOUTUBE URL"  />
                <h2> Add Ingredients to Display</h2>
                <input type="text" placeholder="NAME" value={name} onChange={e=>setName(e.target.value)} />
                <input type="text" placeholder="AMOUNT" value={amount} onChange={e=>setAmount(e.target.value)} />
                <input type="text" placeholder="UNIT" value={unit} onChange={e=>setUnit(e.target.value)} />
                <button onClick={addDrink}>ADD DRINK</button>
            </div>
        </div>
    )
}

export default BackPage