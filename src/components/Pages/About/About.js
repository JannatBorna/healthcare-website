import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import about1 from '../../../images/about/about-1.jpg';
import about2 from '../../../images/about/about-2.png';
import category1 from '../../../images/about/category-1.jpg';
import category2 from '../../../images/about/category-2.jpg';
import category3 from '../../../images/about/category-3.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <Card className="text-dark">
                <Card.Img src={about1} alt="Card image" className='about-card'/>
                <Card.ImgOverlay  className='about-card-text section-gap'>
                    <Card.Title><h1>About <span className="text-danger">Us</span></h1> </Card.Title>
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



        <Row>
            <Col lg={6} md={6} sm={12}>
                <div className='section-gap'>
                    <h1>Servicing Hours</h1>
                    <p>What should you do? Knowing that morning is the best  time of day for medical <br /> care, try to schedule your medical appointments and procedures for as <br /> early in the day as possible.</p>

                    <div className='d-flex service-time'>
                        <p>Friday</p>
                        <p className='booking-time'>08.00 am - 10.00 pm</p>
                    </div>

                    <div className='d-flex service-time'>
                        <p>Monday</p>
                        <p className='booking-time'>08.00 am - 10.00 pm</p>
                    </div>

                     <div className='d-flex service-time'>
                        <p>Saturday</p>
                        <p className='booking-time'>09.00 am - 12.00 pm</p>
                    </div>
                    <div className='d-flex service-time'>
                        <p>Sunday</p>
                        <p className='booking-time'>1.00 pm - 6.00 pm</p>
                    </div>                                      
                </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
                <div className='appointment section-gap'>
                    <h2>Book an Appointment</h2>
                    <from className='booking-from'>
                        <input type="name" placeholder='Patient Name' className='mx-5'/>
                        <br />
                        <input type="phoneNumber" placeholder='Phone' className='my-3 mx-5'/>
                        <br />
                        <input type="email" placeholder='Email Address'className='mx-5'/>
                        <br />
                        <select name="Disease" id="lang" className='my-3 mx-5'>
                            <option value="select">Disease Type</option>
                            <option value="oneType">One Type</option>
                            <option value="twoType">Two Type</option>
                            <option value="threeType">Three Type</option>
                            <option value="fourType">Four Type</option>
                            <option value="fiveType">Five Type</option>
                        </select>
                            <br />
                        <input type="date" id="birthday" name="birthday" className='mx-5'/> 
                        <br />
                        <input type="email" placeholder='appointment Date' className='my-3 mx-5'/>
                       <br />
                        <textarea name="message" rows="2" cols="30" placeholder='Messege' className='mx-5'/>                     
                    </from>
                </div>
            </Col>           
        </Row>




    </Container>
</div>
    );
};

export default About; 
                            
                              



// 
// 

