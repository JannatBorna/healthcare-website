import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerTwo from '../../../images/others/banner-two.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottle, faUserNurse, faLungsVirus } from "@fortawesome/free-solid-svg-icons";
import './BannerTwo.css';


const BannerTwo = () => {
    return (
        <div className='bannerTwo'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='banner-two mt-4'>
                            <img src={bannerTwo} alt="" />
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className='mt-5'>
                            <p>This is Dr Pro</p>
                            <h2>Why choose us?</h2>
                            <p>Skin removal surgery includes a range of body contouring procedures performed after major weight loss to address excess skin folds on the arms, legs, torso and/or buttocks, helping patients achieve a more natural, aesthetically pleasing shape.</p>

                            <div className='d-flex'>
                                <div className='bannerTwo-icon'>
                                    <FontAwesomeIcon icon={faPrescriptionBottle} />
                                </div>
                                <div className='mx-4'>
                                    <h4>Only Top Products</h4>
                                    <p>After talking with your surgeon your surgeon can give you an estimate of how long your surgery will be.</p>
                                </div>
                            </div>

                             <div className='d-flex'>
                                <div className='bannerTwo-icon'>
                                    <FontAwesomeIcon icon={faUserNurse} />
                                </div>
                                <div className='mx-4'>
                                    <h4>Only Top Products</h4>
                                    <p>After talking with your surgeon your surgeon can
                                    an estimate of how long your surgery will be.</p>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <div className='bannerTwo-icon'>
                                    <FontAwesomeIcon icon={faLungsVirus} />
                                </div>
                                <div className='mx-4'>
                                    <h4>Only Top Products</h4>
                                    <p>After talking with your surgeon your surgeon can
                                    an estimate of how long your surgery will be.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <div className='bg-danger'>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className='bannerTwo-text'>
                            <h1>Make your appointment today!</h1>
                            <p>Skin whitening creams only give you temporary results effects however</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className='bannerTwo-text'>
                            <h2>+827365236238</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default BannerTwo;