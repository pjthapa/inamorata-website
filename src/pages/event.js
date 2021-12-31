import React from "react";
import {Link} from "react-router-dom";
import Createcocktaillist from "../components/cocktailList";
import {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';


function EventPage() {
    // create the useState function for the cocktail and setCocktail//
    const [cocktail, setCocktail] = useState([]);

    // create the function to fetch the ingredient list from the database
    const getCocktail = async ()=>{
        const response = await fetch("/cocktail");
        const data = await response.json();
        console.log(data)
        setCocktail(data);
    }

    useEffect(()=>{
        getCocktail();
    }, [])

    //create the function to delete the ingredient on the database
    const onDelete = async id=>{
        const response = await fetch(`/cocktail/${id}`, {method: "DELETE"});

        if(response.status === 200){
            const getResponse = await fetch ("/cocktail")
            const cocktail = await getResponse.json();
            setCocktail(cocktail);
        }
        else{
            console.log(`Failed to delet exercise with id =${id}, status code=${response.status}`)
        }
    };
    
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>   {/* rename virtual bartending  */}
                <Link to="/about" className="nav about">ABOUT</Link> 
            </div>
            <div className="video player">                              {/* Add video player here; from YT */}
                <p>Video Plays here</p>
            </div>
            <div className="cocktail list table">
                <h2>COCKTAIL INGREDIENT LIST</h2>
                <Createcocktaillist cocktail={cocktail} onDelete={onDelete}></Createcocktaillist>
            </div>
        </div>
    )
}

export default EventPage