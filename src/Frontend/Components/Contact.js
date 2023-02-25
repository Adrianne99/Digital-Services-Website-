import React, {useRef} from 'react'
import '../Components/Contact.css'
import { FaTelegram, FaFacebook, FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import emailJs from '@emailjs/browser';

const Contact = () => {




  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_4chygrt', 'template_wi9czot', e.target, 'kUsRYVce2VQeQfaL6')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                form.current.reset();
            });
    };



    return (
        <div className="contact__container" id='contact'>
            <div className="contact__row">
                <div className="contact__content__one">
                    <h1>If you want a Collaboration</h1>
                    <div className='spann'>Just contact us</div>



                        <div className="chat__us">
                            <div className="telephoneLogo">
                                <div className="telephoneLogoOne">
                                    <FaPhoneAlt />
                                    <p>+63920429201</p>
                                </div>
                                <div className="telephoneLogoTwo">
                                    <MdEmail />
                                    <p>preciousclaudia555@gmail.com</p>
                                </div>
                                <div className="telephoneLogoThree">
                                    <GrLocation />
                                    <p>Manila, Philippines</p>
                                </div>
                            </div>
                            <div className="telephoneText">
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTelegram /></a>
                                <a href="#"><FaTwitter /></a>
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        <form onSubmit={sendEmail} ref={form}>
                            <div className="input-box">
                                <input type="text" name="user_name" placeholder="Enter your full name" required/>
                            </div>
                            <div className="input-box">
                                <input type="email" name="user_email" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box message-box">
                                <textarea type="text" placeholder='Your Message' name='message' required></textarea>
                            </div>
                            <div className="contact__button">
                                <input type="Submit" value="Submit" />
                            </div>
                        </form>
                    </div>


            </div>
        </div>
    )
}

export default Contact
