import React, { useState } from 'react'
import "../Components/Navbar.css"
import MainImage from "../Assets/logo.png"
import { Link as Links } from "react-scroll"
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [fix, setFix] = useState(false)

  return (
    <nav className={fix ? 'navbar fixed' : 'navbar'}>
        <div className={`nav-items ${isOpen && "open"}`}>
        <Links to='hero' spy={true} smooth={true} duration={300} offset={-80}>HOME</Links>
        <Links to='about' spy={true} smooth={true} duration={300} offset={0}>ABOUT</Links>
        <Links to='whyus' spy={true} smooth={true} duration={300} offset={0}>WHY US</Links>
        </div>
        <div className="nav-logo">
          <img src={MainImage}/>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
        <Links to='hero' spy={true} smooth={true} duration={300} offset={0} className="nav-hidden">HOME</Links>
        <Links to='about' spy={true} smooth={true} duration={300} offset={0} className="nav-hidden">ABOUT</Links>
        <Links to='whyus' spy={true} smooth={true} duration={300} offset={0} className="nav-hidden">WHY US</Links>
        <Links to='pricing' spy={true} smooth={true} duration={300} offset={0}>PRICING</Links>
        <Links to='About' spy={true} smooth={true} duration={300} offset={-90}>PROJECTS</Links>
        <Links to='About' spy={true} smooth={true} duration={300} offset={-90}>CONTACT US</Links>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen (!isOpen)}
        >

        
            <div className="bars"></div>
        </div>
    </nav>
  )
}

export default Navbar