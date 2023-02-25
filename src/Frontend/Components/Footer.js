import React from 'react'
import '../Components/Footer.css'
import logo from '../Assets/logo.png'
import {Link as Links} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__row">
            <div className="footer__column">
                <img src={logo}/>
                    <ul>
                        <li>
                            <Links to="hero" spy={true} smooth={true} duration={300} offset={-80}>HOME</Links>
                            <Links to="about" spy={true} smooth={true} duration={300} offset={0}>PRICING</Links>
                        </li>
                    </ul>
                        <p>&#169; All rights reserved. <span> Intendo Digital Services </span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer