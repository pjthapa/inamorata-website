import React, {useState, useEffect} from "react";
import {logo1} from '../images/'

function Logo() {
    
    // create a scorll useEffect
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = ()=> setScrollY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, []);

    //get the current height of the page --- this way the pages can be set to the current for all size viewports
    const initPageHeight = window.innerHeight
    const [pageHeight, setPageHeight] = useState(initPageHeight)
    const handleHeight = ()=> setPageHeight(window.innerHeight)
    useEffect(()=>{
        window.addEventListener('resize', handleHeight)
        return ()=> window.removeEventListener('onresize', handleHeight)
    },[])
    
    return(
        <div>
        <div className="page one logo" style={{ height: `${pageHeight}px`}}>
            <p className="logotext">OF MIXOLOGY IN'AMORATA</p>
            <img src={logo1} alt="In'amorata Logo" id="page1" style={{ height: `${pageHeight * 0.8}px`,  transform: `translateY(${scrollY * 0.5}px)`}}/>
            <p className="logotext">BARTENDER UNDERGROUND</p>
        
        </div>
        <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>
        <h2 className="logotext">COMING SOON</h2>
        </div>
    )
}
export default Logo