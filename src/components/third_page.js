import react, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
    logo1, cocktail1, cocktail2, cocktail3, cocktail4, cocktail5, cocktail6
} from '../images/'
import "../styles/page3.css"

function ThirdPage() {
    const [currentImage, setCurrentImage] = useState(cocktail2)
    
    return(
        <div className="third page">
            <div className="picture frame">
                <div className="picture display">

                    <img src={currentImage} />
                </div>
                <div className="picture scroll">
                    <div className="scroll container">
                        <img src={cocktail1}  onClick={() => setCurrentImage(cocktail1)}/>
                    </div>
                    <div className="scroll container">
                        <img src={cocktail2}  onClick={() => setCurrentImage(cocktail2)}/>
                    </div>
                    <div className="scroll container">
                        <img src={cocktail3}  onClick={() => setCurrentImage(cocktail3)}/>
                    </div>
                    <div className="scroll container">
                        <img src={cocktail4}  onClick={() => setCurrentImage(cocktail4)}/>
                    </div>
                    <div className="scroll container">
                        <img src={cocktail5}  onClick={() => setCurrentImage(cocktail5)}/>
                    </div>
                    <div className="scroll container">
                        <img src={cocktail6}  onClick={() => setCurrentImage(cocktail6)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage