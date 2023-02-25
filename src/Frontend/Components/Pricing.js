import React from 'react'
import '../Components/Pricing.css'
import { BsCheckLg } from 'react-icons/bs'
import Two from '../Assets/Two.png'

const Pricing = () => {
    return (
        <div className="pricing__container" id='pricing'>
            <div className="pricing__row">
                <div className="pricing__column__one">
                    <h3>Our Fees for our Services</h3>
                    <h2>Pricing</h2>
                    <div className="pricing__line"></div>
                    <div className="pricing__column__two">
                        <div className="pricing__box__one">
                            <div className="pricing__box__one__image">
                                <img src={Two} />
                                <h3>Graphic Designer</h3>
                                <h2>$200</h2>
                            </div>
                            <div className="pricing__services">
                                <ul>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp; High Quality Graphics </li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;Professional Designer</li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;4 Graphics </li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;1 Logo </li>
                                </ul>
                            </div>
                            <div className="pricing__button">
                                <a href="#">
                                    <button>HIRE</button>
                                </a>
                            </div>
                        </div>
                        <div className="pricing__box__one">
                            <div className="pricing__box__one__image">
                                <img src={Two} />
                                <h3>Web Developer</h3>
                                <h2>$200</h2>
                            </div>
                            <div className="pricing__services">
                                <ul>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp; High Quality Website </li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp; BS Degree</li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;4 Sections </li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;1 Logo </li>
                                </ul>
                            </div>
                            <div className="pricing__button">
                                <a href="#">
                                    <button>HIRE</button>
                                </a>
                            </div>
                        </div>
                        <div className="pricing__box__one">
                            <div className="pricing__box__one__image">
                                <img src={Two} />
                                <h3>Chat Moderator</h3>
                                <h2>$200</h2>
                            </div>
                            <div className="pricing__services">
                                <ul>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp; High Quality Graphics </li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;Professional Designer</li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;4 Graphics </li>
                                    <li><BsCheckLg className='BsCheckLg' />&nbsp;&nbsp;1 Logo </li>
                                </ul>
                            </div>
                            <div className="pricing__button">
                                <a href="#">
                                    <button>HIRE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing