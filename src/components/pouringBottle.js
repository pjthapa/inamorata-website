import "../styles/pouring.css"
import { useParallax } from "react-scroll-parallax";
import {whisky_image, glass, shaker, daquiri} from "../images/"

export default function Pouringbottle(){
    const parallax = useParallax({
        rotate: [0,50],
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
            <img src ={glass}  alt="measuring cup" id="mug" />
            <img src ={shaker} alt="cocktail shaker" id="shaker" />
            <img src={daquiri} alt ="copper mug" id="copper" />

        </div> 
    )
}