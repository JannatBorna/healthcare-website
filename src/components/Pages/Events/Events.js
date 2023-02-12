import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../../../images/care/care-1.png';
import Image2 from '../../../images/care/care-2.png';
import Image3 from '../../../images/care/care-3.png';

import './Events.css'

const Events = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='text-center section-gap'>
                            <h2>Our Offered Services</h2>
                            <p>A doctor plays the most vital role in society. He is certified for ensuring the treatment and remedy for sick p</p>
                        </div>
                    </Col>
                </Row>

                <h2 className="text-center fw-3">Medical <span className="text-color">Healthcare</span></h2>

                <div className="care-card">
    
                </div>
            </Container>
        </div>
    );
};

export default Events;
                    
                