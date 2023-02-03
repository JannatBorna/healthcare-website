import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,

} from "@fortawesome/free-brands-svg-icons";

import {
    faPhoneVolume,
    faEnvelope,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";

import logo from '../../../images/plus.png';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="left-container text-start">
                                <div className='footer-logo mt-5'>
                                    <img src={logo} alt="" className='logo'/>
                                    <span className='logo-text mx-3'>Lifeline Medical</span>
                                </div>
                                <p className="footer-text mt-3">
                                    The toll-free helpline '+017 33 901 001' will be operational from Monday to Saturday between 10 am to 6 pm. It offers direct service in Dhaka,Comilla, Khulna, Dinajpur, Rangpur, Barisal, Faridpur, Pabna, Kushtia, Tangail, Patuakhali.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">About</li>
                                    <li className="footer-menu">Contact us</li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className='d-flex'>
                                <FontAwesomeIcon icon={faPhoneVolume} /> 
                                <h5>+0 1 7 457 908 54</h5>
                            </div>

                            <div className='d-flex'>
                                 <FontAwesomeIcon icon={faGlobe} />
                                 <p> www.LifelineMedical.com </p> 
                            </div>

                            <div className='d-flex'>
                                 <FontAwesomeIcon icon={faEnvelope} />
                                <p>lifeline@medical.com</p>
                            </div>

                            <div className="icons-container d-flex text-center ">
                                <div className="icon icon_instagram">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                                <div className="icon icon_twitter">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                                <div className="icon icon_youtube">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="icon icon_facebook">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                 </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className=''>
                              <input className="footer-input mx-1 mb-3" type="text" placeholder="Enter Email" />
                              <textarea rows="2" cols="21" placeholder='message'></textarea>
                              <br />
                              <button type="submit">Subscribe</button>
                          </div>
                          
                        </div>
                    </div>
                </div>

                   <p className="footer-copy-text">lifeline-medical ©  All rights</p>
            </div>
        </div>
    );
};


export default Footer;
    