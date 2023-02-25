import React from 'react'
import VideoBg from '../Assets/videoBg.mp4'
import { Link } from "react-scroll"
import '../Components/landingPage.css'

const Hero = () => {

  return (
    <div className="landingPage__container" style={{ overflow: 'hidden' }}>
        <div className="landingPage__bg">
            <video src={VideoBg} autoPlay loop muted></video>
        </div>
        <div className="landingPage__content">
          <h3>Welcome to</h3>
          <h1>Intendo Digital</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quae. <br></br>Et perferendis libero doloribus. Eum dolorum obcaecati rerum consequatur officiis.</p>
          <Link to="contact"><button>Contact us</button></Link>
        </div>
        <Link to="hero" className="landingPage__arrow" spy={true} smooth={true} duration={300} offset={-80}>
          <span></span>
          <span></span>
          <span></span>
        </Link>
    </div>
  )
}

export default Hero