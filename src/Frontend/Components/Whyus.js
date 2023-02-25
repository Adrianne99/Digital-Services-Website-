import React from 'react'
import '../Components/whyus.css'
import ReactPlayer from 'react-player'
import whyUsVideo from '../Assets/whyusBg.mp4'


const whyus = () => {
  return (
    <div className="whyus__container" id='whyus'>
      <div className="whyus__row">
        <div className="whyus__content">
          <h3>Why you should choose us?</h3>
          <h2>Why Intendo Digital?</h2>
          <div className="whyus__line"></div>
          <div className="whyus__content__items">
            <div className="whyus__item__one">
              <div className="item__one__number"><h3>01</h3></div>
              <div className="item__one__paragraph">Fast and High Quality Services </div>
            </div>
            <div className="whyus__item__one">
              <div className="item__one__number"><h3>02</h3></div>
              <div className="item__one__paragraph">Cheap Price but Quality Service</div>
            </div>
            <div className="whyus__item__one">
              <div className="item__one__number"><h3>03</h3></div>
              <div className="item__one__paragraph">Experienced and Proffessional</div>
            </div>
          </div>
      </div>
      <div className="whyus__contentOne">
        <ReactPlayer playing url={whyUsVideo} controls={false} className="react-player" width="450px" />
      </div>
    </div>
    </div >
  )
}

export default whyus