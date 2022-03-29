import React, {useState, useEffect} from "react";
import {
    logo1
} from '../images/'
import ThirdPage from "../components/third_page";
import ContactForm from "../components/form";
import Navbar from "../components/navbar";
import Pouringbottle from "../components/pouringBottle";




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
            </div>
            <div className="page container">
                <div className="page one logo" >
                    <img src={logo1} alt="In'amorata Logo" id="page1" style={{  height: `80vh`,  transform: `translateY(${scrollY * 0.5}px)`, opacity: `${((pageHeight - (scrollY*1.2))/pageHeight)*100}%`}}/>
                    <div className="empty scroll"></div>
                </div>

                <div className="page two" >
                    <Pouringbottle />
                </div>

                
                <div className="page three">
                    <ThirdPage />
                </div>

                <div className="page four">
                    <ContactForm />
                </div>
                
            </div>
            <div className="footer">
                © In'amorata of Mixology by Prasanna
                </div>
        </div>
    )


}

export default HomePage