import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import clint from '../../../images/others/clint.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import './Clint.css';

const Clint = () => {
    return (
        <div className='section-gap mb-5'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='text-center'>
                            <h2>Enjoy our Client’s Feedback</h2>
                            <p>The way you gave that presentation today really shows me you listened <br /> to what I said about the snafu last month. I appreciate your mindful application of feedback</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='clint mt-5'>
                            <img src={clint} alt="" />
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className='clint-text'>
                            <div className='d-flex'>
                                <h3>Rahya Hilte</h3>
                                    <div className='text-danger mx-5'>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </div>
                            </div>
                            <p>“I'm so impressed by your dedication to learning. I know it wasn't easy when that technology solution you presented didn't work out. Thank you so much for your treatment and your consultations. I'm forever grateful to you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Clint;