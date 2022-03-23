import react, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
    cocktail1, cocktail2, cocktail3, cocktail4, cocktail5, cocktail6
} from '../images/'
import "../styles/page3.css"
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle} from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function ThirdPage() {
    const [currentImage, setCurrentImage] = useState(cocktail2)
    var cocktail_array = [cocktail1, cocktail2, cocktail3, cocktail4, cocktail5, cocktail6]
    const getNext= () => {
        var current_index = cocktail_array.indexOf(currentImage)
        var next_index = (current_index+1)% 6
        return(cocktail_array[next_index])
    }
    const getPrevious = () =>{
        var current_index = cocktail_array.indexOf(currentImage)
        var previous_index = (current_index + 6 -1) % 6
        return(cocktail_array[previous_index])
    }

    return(
        <div className="third page">
            <div className="picture frame">
                <div className="picture display">
                    <div className="navigate icons">
                        <IconContext.Provider value= {{color: 'white', size: 70}}>
                            <AiOutlineLeftCircle onClick={() => setCurrentImage(getPrevious())}/>
                        </IconContext.Provider>
                    </div>
                    <img src={currentImage} />

                    <div className="navigate icons">
                        <IconContext.Provider value= {{color: 'white', size: 70}}>
                            <AiOutlineRightCircle onClick={() => setCurrentImage(getNext())}/>
                        </IconContext.Provider>
                    </div>
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