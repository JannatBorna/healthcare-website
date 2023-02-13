import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faRocket, faHeartbeat, faHospitalAlt, faSyringe} from "@fortawesome/free-solid-svg-icons";
import './Events.css'

const Events = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='text-center section-gap'>
                            <h2>Our Offered Services</h2>
                            <p>We may consider a Doctor, the most important person in society. He treats <br /> from one or many diseases. The doctor has a profound knowledge of various illnesses.</p>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className='text-center mt-4'>
                           <div className='event-icon'>
                             <FontAwesomeIcon icon={faRocket} />
                           </div>
                            <h4>24/7 Emergency</h4>
                            <p>Severe or persistent vomiting. Sudden injury due to a motor vehicle accident, deep or large wound, or other injuries.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='text-center mt-4'>
                           <div className='event-icon'>
                             <FontAwesomeIcon icon={faHeartbeat} />
                           </div>
                            <h4>Expert Consultation</h4>
                            <p>Medical experts are called physicians because the word physic originally referred of medicine and to natural science.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='text-center mt-4'>
                            <div className='event-icon'>
                                <FontAwesomeIcon icon={faHospitalAlt} />
                            </div>
                            <h2>Family Planning</h2>
                            <p>If you want to get pregnant, we recommend an obstetrician family planning, pregnancy, and baby delivery.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='text-center mt-4'>
                           <div className='event-icon'>
                             <FontAwesomeIcon icon={faSyringe} />
                           </div>
                            <h4>Intensive Care</h4>
                            <p>An intensivist, also known as a critical care doctor, is a medical practitioner who specializes in the care of critically ill.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Events;
                    
                