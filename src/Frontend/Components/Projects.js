import React from 'react'
import '../Components/Projects.css'
import website from '../Assets/Website.png'
import websitetwo from '../Assets/WebsiteTwo.jpg'
import {BsBoxArrowInUpRight} from 'react-icons/bs'

const Projects = () => {

  return (
    <div className="projects__container">
      <div className="projects__row">
        <div className="projects__content__one">
          <h3>Our Previous Works</h3>
          <h2>Projects</h2>
          <div className="project__line"></div>
          <div className="project__content__two" id='content-two'>
            <div className="project__box__one">
            <div className="project__inner__box__one">
                <h2>View Logo <BsBoxArrowInUpRight /> </h2>
                <img src={website} />
              </div>
            </div>
            <div className="project__box__one">
              <div className="project__inner__box__one">
                <h2>View Website <BsBoxArrowInUpRight /> </h2>
                <img src={website} />
              </div>
            </div>
            <div className="project__box__one">
            <div className="project__inner__box__one">
                <h2>View Website <BsBoxArrowInUpRight /> </h2>
                <img src={websitetwo} />
              </div>
            </div>
            <div className="project__box__one">
              <div className="project__inner__box__one">
              <div className="project__inner__box__one">
                <h2>View Logo <BsBoxArrowInUpRight /> </h2>
                <img src={website} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects