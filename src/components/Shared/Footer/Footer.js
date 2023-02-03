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
                            <div className="footer-list mt-4 d-flex">
                                <ul>
                                    <li>Free Meeting</li>
                                    <li>Social Media</li>
                                    <li>Email Tracking </li>
                                    <li>Contact us</li>
                                    <li>Sales Automation</li>
                                    <li>Ads Software</li>
                                    <li>Email Marketing</li>
                                    <li>Lead Management</li>
                                    <li>line Management</li>
                                </ul>

                                 <ul>
                                    <li>Management Team</li>
                                    <li>Board of Directors</li>
                                    <li>Investor Relationst</li>
                                    <li>Free Website Builder</li>
                                    <li>Sales Templates</li>
                                    <li>Help Desk Software</li>
                                    <li>Free Online Form</li>
                                    <li>Marketing Analytics</li>
                                    <li>Free Web Hosting</li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-list mt-4 d-flex">
                                <ul>
                                    <li>Inspiration</li>
                                    <li>Wishlists</li>
                                    <li>No-Code movement</li>
                                    <li>Customers</li>
                                    <li>Community</li>
                                    <li>Hire an Experte</li>
                                    <li>Cookie policye</li>
                                    <li>Accessibility</li>
                                    <li>Hosting</li>
                                </ul>

                                 <ul>
                                    <li>Memberships</li>
                                    <li>Interactions</li>
                                    <li>Investor Relationst</li>
                                    <li>RSS feed</li>
                                    <li>Archive</li>
                                    <li>All Partner Programs</li>
                                    <li>Affiliate Program</li>
                                    <li>HubSpot for Startups</li>
                                    <li>Ebooks</li>
                                </ul>
                            </div>


                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12 mt-4">
                            <div className='d-flex footer-social'>
                                   <FontAwesomeIcon icon={faPhoneVolume} /> 
                                   <p className='mx-2'><a href="tel:+4733378901">+23 303 745 971</a></p>
                            </div>
                            <div className='d-flex footer-social'>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    <p className='mx-2'><a href="https://www.LifelineMedical.com/">LifelineMedical.com</a></p>
                            </div>
                            <div className='d-flex footer-social'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className='mx-2'><a href="mailto:lifeline@medical.com">lifeline@medical.com</a></p>
                            </div>

                            <div className="d-flex">
                                <div className="icon-instagram">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                                <div className="icon-twitter mx-4">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                                <div className="icon-youtube">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="icon-facebook mx-3">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </div>
                            </div>

                          <div className='mt-4'>
                              <input className="footer-input mx-1 mb-3" type="text" placeholder="Enter Email" />
                              <button type="submit" className='subscribe-button'>Subscribe</button>
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
    