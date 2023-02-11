import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import about1 from '../../../images/about-4.jpg';
import about2 from '../../../images/about-3.png';
import category1 from '../../../images/about-category/category-1.jpg';
import category2 from '../../../images/about-category/category-2.jpg';
import category3 from '../../../images/about-category/category-3.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <Card className="text-dark">
                <Card.Img src={about1} alt="Card image" className='about-card'/>
                <Card.ImgOverlay  className='about-card-text section-gap'>
                    <Card.Title><h1>About <span className="text-color">Us</span></h1> </Card.Title>
                    <Card.Text>
                       <p>Good health is central to human happiness and <b>well-being that contributes</b> significantly to prosperity and wealth and even economic progress, as healthy populations are more productive, save more and live longer.</p>
                       <button className='button'>Get started</button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

    <Container>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <div className='text-center section-gap'>
                    <h2>Procedure Category</h2>
                    <p>A doctor plays the most vital role in society. He is certified for ensuring the treatment and remedy for sick people. <br/> A nutritionist suggests a food chart for taking care of health. Doctor because they have to respond to the emergency patient anytime.</p>
                </div>
            </Col>
        </Row>


        <Row>
            <Col lg={4} md={6} sm={12}>
                <div className='section-gap category'>
                    <img src={category1} alt="" />
                        <div className="middle">
                            <div className="text">EMERGENCY TREATMENT</div>
                        </div>                   
                </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
                <div className='section-gap category'>
                    <img src={category2} alt="" />
                        <div className="middle">
                            <div className="text">EMERGENCY TREATMENT</div>
                        </div>
                </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
                <div className='section-gap category'>
                    <img src={category3} alt="" />
                        <div className="middle">
                            <div className="text">EMERGENCY TREATMENT</div>
                        </div>
                </div>
            </Col>
        </Row>


        <Row>
            <Col lg={8} md={7} sm={12}>
                <div className='section-gap'>
                    <h2>Welcome to our Clinic</h2>
                    <div className='d-flex'>
                        <p className='p-tag'>Short Speech on Health is Wealth. Health is the biggest wealth for a human being in his/her entire lifetime. One can survive without excess money but can't survive without good health. money but we can take care of it and we can cure it when needed.</p>
                         <p className='mx-3 p-tag'>A healthy body is maintained by good nutrition, regular exercise, avoiding harmful habits, making informed and responsible decisions about health, and seeking medical assistance when necessary.</p>
                    </div>
                </div>
            </Col>

              <Col lg={4} md={5} sm={12}>
                <div className='mt-3'>
                    <img src={about2} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</div>
    );
};

export default About; 
                            
                              