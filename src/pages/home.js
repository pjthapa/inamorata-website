import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {
    logo1, cocktail1, cocktail2, cocktail3, cocktail4, cocktail5, cocktail6
} from '../images/'
import SecondPage from "../components/second_page";
import ThirdPage from "../components/third_page";
import ContactForm from "../components/form";




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
                <Link to="/" className="nav home" style={{background :"#f3feff", paddingLeft:"2rem", paddingRight:"2rem"}}>HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>
                <Link to="/about" className="nav about">ABOUT</Link> 
            </div>
            <div className="page container">
                <div className="page one logo" >
                    <p>OF MIXOLOGY IN'AMORATA</p>
                    <img src={logo1} alt="In'amorata Logo" id="page1" style={{  height: `${pageHeight * 0.8}px`,  transform: `translateY(${scrollY * 0.5}px)`}}/>
                    <p>BARTENDER UNDERGROUND</p>
                    
                </div>
                <div class="empty scroll" ></div>

                <div className="page two" >
                    <SecondPage data={pageHeight} scroll={scrollY}></SecondPage>
                </div>
                <div class="empty scroll" ></div>
                
                <div className="page three">
                <h1 className="cocktail texts">  2) SPECIALIY COCKTAILS</h1>
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