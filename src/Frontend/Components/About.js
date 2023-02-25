import React from 'react'
import '../Components/About.css'
import aboutOne from '../Assets/About-1.jpg'
import aboutTwo from '../Assets/About-2.jpg'
import { Link as Links } from "react-scroll"

const About = () => {
  return (
    <div className="about__container" id='about'>
      <div className="about__row">
        <div className="about__content">
          <h3>What is?</h3>
          <h2>Intendo Digital</h2>
          <div className="about__line"></div>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ratione qui? Esse fugiat voluptate autem aperiam doloremque dolor nostrum, nisi vitae facilis fuga rerum.<br></br><br></br> aut non placeat dolorum earum consequatur! Consectetur odio doloribus officia accusamus, quod dolor ratione quos reprehenderit consequatur fugiat, magnam quasi obcaecati laborum.</h5>
          <Links to='contact'><button className='about__button'>Contact us</button></Links>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={aboutOne}  className="imgg"/>
            </div>
            <div className="image-stack bottom">
              <img src={aboutTwo} className="imgg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About