import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {
    file1,file2, file3, file4, file5, logo1
} from '../images/'





function HomePage() {

    // create a scorll useEffect
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = ()=> setScrollY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, []);

    //get the current height of the page --- this way the pages can be set to the current for all size viewports
    const initPageHeight = window.innerHeight
    const [pageHeight, setPageHeight] = useState(initPageHeight)
    const handleHeight = ()=> setPageHeight(window.innerHeight)
    useEffect(()=>{
        window.addEventListener('onresize', setPageHeight)
        // return ()=> window.removeEventListener('onresize', handleHeight)
    },[])

    console.log(pageHeight)
    
    return(
        <div className="pageContent">
            <div className="navbar container" >
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>
                <Link to="/about" className="nav about">ABOUT</Link> 
            </div>
            <div className="page container">
                <div className="page one" style={{ height: `${pageHeight}px`,  transform: `translateY(${scrollY * 0.5}px)`}}>
                    <img src={logo1} alt="In'amorata Logo" id="page1" />
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>
                <div className="page two">
                    <p>VIRTUAL BARTENDING</p>
                    <img src={file5} alt="Cassie Making Cocktails" id="page2"
                     style={{ height: `${pageHeight}px`,  transform: `translateY(${scrollY * 0.5}px)`}}></img>
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>
                <div className="page three">
                    <p>SPECIALIY COCKTAILS</p>
                    <img src={file4} alt="Specialty Cocktails Anamorata" id="page3" />
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>
                <div className="page four">
                    <p>CONSULTING AND EVENTS PLANNING</p>
                    <img src={file3} alt="Cassie creating Customer request" id="page4" />
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>
            </div>
        </div>
    )
    var imageHeight = document.getElementById("file1").style.height;
    document.getElementsByClassName("parallax text 1").style.height = imageHeight;

}

export default HomePage