import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Image1 from '../../../images/care/care-1.png';
import Image2 from '../../../images/care/care-2.png';
import Image3 from '../../../images/care/care-3.png';
import Image4 from '../../../images/care/care-4.png';

import './Events.css'

const Events = () => {
    return (
        <div>
            <Container >
                <h2 className="text-center fw-3">Best Medical <span className="text-color">&</span> Healthcare</h2>
                <Row lg={1} md={3} xs={1} className="g-4">
                <div className="care-card">
                    <Card className=" event bg-dark text-white w-100">
                        <Card.Img src={Image2} />
                        <Card.ImgOverlay>
                            <Card.Title>Heart Rate</Card.Title>
                            <Card.Text>
                                A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute.
                            </Card.Text>
                            
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="event bg-dark text-white w-100">
                        <Card.Img src={Image1} />
                        <Card.ImgOverlay>
                            <Card.Title>Medical Counseling</Card.Title>
                            <Card.Text>
                                Services covered by mental health services such as individual or inpatient mental health services,services, residential treatment services, and voluntary inpatient detoxification.
                            </Card.Text>
                           
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="event bg-dark text-white w-100">
                        <Card.Img src={Image3} />
                        <Card.ImgOverlay>
                            <Card.Title>Qualified Doctors</Card.Title>
                            <Card.Text>
                                Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.
                            </Card.Text>
                            
                        </Card.ImgOverlay>
                    </Card>

                    {/* <Card className="bg-dark text-white w-75 ">
                        <Card.Img src={Image4} />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                           
                        </Card.ImgOverlay>
                    </Card> */}
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default Events;