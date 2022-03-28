import "../styles/pouring.css"
import { useParallax } from "react-scroll-parallax";
import {whisky_image, cocktail} from "../images/" 

export default function Pouringbottle(){
    const parallax = useParallax({
        rotate: [0,60],
    });

    return(
        <div className="second page">
            <div class="bartending text">
                <h1>OUR SERVICES:</h1>
                <h1>VIRTUAL BARTENDING</h1>
            </div>
            <div ref={parallax.ref} className="pour animation container">
                <div className="whisky bottle container">
                    <img id="jamo" src={whisky_image.default} alt="whisky bottle" />
                </div>
            </div>
            <img src={cocktail} alt="copper mug"  id="mug"/>

        </div> 
    )
}