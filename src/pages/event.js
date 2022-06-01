import React from "react";
// import {useState, useEffect} from "react";
import Logo from "../components/logo";
import Navbar from "../components/navbar";


function EventPage() {
    // create the useState function for the cocktail and setCocktail//
    // const [cocktail, setCocktail] = useState([]);

    // // create the function to fetch the ingredient list from the database
    // const getCocktail = async ()=>{
    //     const response = await fetch("/cocktail");
    //     const data = await response.json();
    //     console.log(data)
    //     setCocktail(data);
    // }

    // useEffect(()=>{
    //     getCocktail();
    // }, [])

    // //create the function to delete the ingredient on the database
    // const onDelete = async id=>{
    //     const response = await fetch(`/cocktail/${id}`, {method: "DELETE"});

    //     if(response.status === 200){
    //         const getResponse = await fetch ("/cocktail")
    //         const cocktail = await getResponse.json();
    //         setCocktail(cocktail);
    //     }
    //     else{
    //         console.log(`Failed to delet exercise with id =${id}, status code=${response.status}`)
    //     }
    // };
    
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Navbar />
            </div>
            <Logo />
        </div>
    )
}

export default EventPage