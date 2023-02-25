import React, {useState} from 'react'
import design from '../Assets/design.png'
import develop from '../Assets/develop.png'
import plan from '../Assets/plan.png'
import '../Components/Hero.css'

function Hero() {


  const [toggleState, setToggleState] = useState(2)

  const toggleTab = (index) => {
    setToggleState(index)
  }


  return (
    <div className='hero__container' id="hero">
      <div className="hero__row">
        <div className="hero__column__one">
          <h3>What we do?</h3>
          <h2>We do digital services</h2>
          <div className="hero__line"></div>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vitae. <br></br>Magnam provident ut sapiente sed, nostrum error perspiciatis dicta incidunt.</p> */}
        </div>
        <div className="hero__column__two">
          <div className={toggleState === 1 ? " hero__content__one hero__content__active" : "hero__content__one "} onClick={() => toggleTab(1)}>
            <img src={plan} className={toggleState === 1 ? " image__active" : ""} onClick={() => toggleTab(1)}/>
            <h2>GRAPHIC DESIGNER</h2>
            <p className={toggleState === 1 ? "paragraph__active" : ""} onClick={() => toggleTab(1)} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora, tenetur laudantium aliquam tempore impedit laboriosam facere eligendi cum sed.</p>
            <div className={toggleState === 1 ? "hero__line__two hero__line__two__active" : "hero__line__two"} onClick={() => toggleTab(1)}></div>
          </div>
          <div className={toggleState === 2 ? " hero__content__two hero__content__active" : "hero__content__two"} onClick={() => toggleTab(2)}>
          <img src={design} className={toggleState === 2 ? " image__active" : ""} onClick={() => toggleTab(2)}/>
          <h2>WEB DEVELOPER</h2>
          <p className={toggleState === 2 ? "paragraph__active" : ""} onClick={() => toggleTab(2)} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora, tenetur laudantium aliquam tempore impedit laboriosam facere eligendi cum sed.</p>
          <div className={toggleState === 2 ? "hero__line__two hero__line__two__active" : "hero__line__two"} onClick={() => toggleTab(2)}></div>
          </div>
          <div className={toggleState === 3 ? " hero__content__two hero__content__active" : "hero__content__two"} onClick={() => toggleTab(3)}>
          <img src={develop} className={toggleState === 3 ? " image__active" : ""} onClick={() => toggleTab(3)}/>
          <h2>MODERATOR</h2>
          <p className={toggleState === 3 ? "paragraph__active" : ""} onClick={() => toggleTab(3)} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora, tenetur laudantium aliquam tempore impedit laboriosam facere eligendi cum sed.</p>
          <div className={toggleState === 3 ? "hero__line__two hero__line__two__active" : "hero__line__two"} onClick={() => toggleTab(3)}></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero