import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SecondPage = (props) =>{
    const {ref, inView, entry } = useInView({
        threshold: 0.3
    });

    const [scrollAmount, setScrollAmount] = useState(0)
    const handleScroll= () =>{
        if(inView){
            console.log("inview")
            setScrollAmount(props.data - props.scroll)
        }
        else{
            console.log("not in view")
            setScrollAmount(0)
        }
    }
    useEffect(()=>{
        handleScroll()
    }, [handleScroll]
    )

    return (
        <div ref ={ref}>

            
            
            <h3>{props.scroll}</h3>
            <h3>{inView}</h3>
            <h2 style={{transform:`translateY(${scrollAmount * 0.4}px)`}}>{`Header inside viewport ${inView}. `}</h2>
        </div>
    )
}
export default SecondPage