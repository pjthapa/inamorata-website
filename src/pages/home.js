import React, {useState, useEffect} from "react";
import {
    logo1
} from '../images/'
import SecondPage from "../components/second_page";
import ThirdPage from "../components/third_page";
import ContactForm from "../components/form";
import Navbar from "../components/navbar";
import Pouringbottle from "../components/pouringBottle";
import { useParallax } from "react-scroll-parallax";




function HomePage() {
    
    // create a scorll useEffect
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = ()=> setScrollY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, []);

    // get the current height of the page --- this way the pages can be set to the current for all size viewports
    const initPageHeight = window.innerHeight
    const [pageHeight, setPageHeight] = useState(initPageHeight)
    const handleHeight = ()=> setPageHeight(window.innerHeight)
    useEffect(()=>{
        window.addEventListener('resize', handleHeight)
        return ()=> window.removeEventListener('onresize', handleHeight)
    },[])
    
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Navbar />
                {/* <Link to="/" className="nav home" style={{background :"black", paddingLeft:"2rem", paddingRight:"2rem"}}>HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>
                <Link to="/about" className="nav about">ABOUT</Link>  */}
            </div>
            <div className="page container">
                <div className="page one logo" >
                    <img src={logo1} alt="In'amorata Logo" id="page1" style={{  height: `80vh`,  transform: `translateY(${scrollY * 0.5}px)`, opacity: `${((pageHeight - scrollY)/pageHeight)*100}%`}}/>
                </div>

                <div className="page two" >
                    <Pouringbottle />
                </div>

                
                <div className="page three">
                <h1 className="cocktail texts">  2) SPECIALITY COCKTAILS</h1>
                    <ThirdPage />
                </div>

                <div className="page four">
                    <h1 className="consulting texts">  3) CONSULTING AND EVENTS PLANNING</h1>
                    <ContactForm />
                </div>
                
            </div>
        </div>
    )


}

export default HomePage