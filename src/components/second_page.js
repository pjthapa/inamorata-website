import React, { useEffect, useState } from "react";
import {cocktail, daquiri, strawberry_image,  whisky_image, shaker, creamyMartini} from "../images/"

const SecondPage = (props) =>{

    const [glasstranslate, setGlasstranslate] = useState(0)
    const handleGlass = () =>{
        if(props.scroll < 1.1 * props.data){
            setGlasstranslate(0)
        }
        else if (props.scroll < 3 * props.data){
            console.log("inview")
            setGlasstranslate(props.scroll - (1.4 * props.data))
        }
        else{
            const translationAmount = glasstranslate
            setGlasstranslate(translationAmount)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleGlass)
        return ()=> window.removeEventListener('scroll', handleGlass)
    }, [handleGlass])

    // const [scrollAmount, setScrollAmount] = useState(0)
    // const handleScroll= () =>{
    //     if(inView){
    //         setScrollAmount(props.data - props.scroll)
    //     }
    //     else{
    //         setScrollAmount(0)
    //     }
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll', handleScroll)
    //     return ()=> window.removeEventListener('scroll', handleScroll)
    // }, []
    // )

    return (
        <div className="virtual bartending">
            <div class="bartending text">
                <h1>OUR SERVICES:</h1>
                <h1>1) VIRTUAL BARTENDING</h1>
                <img src={shaker.default} style={{transform: `translateY(${glasstranslate * 0.6 }px) rotate(45deg)`, height:`${props.data / 2}px`}}  alt="shaker"/>

            </div>
            <div class="bartending images">
                
                <div class ="bottles" style={{height: `${props.data * 0.4}px`}}>
                    <div> <img src={whisky_image.default} alt="whisky" style={{height:`${props.data}px` , transform: `rotate(135deg)`}} /> </div>
                    <div> <img src={strawberry_image.default} alt="strawberry" style={{height:`${props.data / 10}px`}} /></div>
                    
                </div>
                <img src={cocktail.default} style={{transform: `translateY(${glasstranslate * 0.4 }px)`, height:`${props.data / 2}px`}}  alt="cosmopolitan"/>
                <img src={daquiri.default} style={{transform: `translateY(${glasstranslate * 0.6 }px)`, height:`${props.data / 2}px`}}  alt="daquiri"/>   
                <img src={creamyMartini.default} style={{transform: `translateY(${glasstranslate * 0.8 }px)`, height:`${props.data / 2}px`}}  alt="martini"/>          
                
            </div>
            
        </div>
    )
}
export default SecondPage