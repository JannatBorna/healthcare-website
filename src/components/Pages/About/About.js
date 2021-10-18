import React from 'react';
import { Container, Accordion, Button, Card } from 'react-bootstrap';
import aboutImg from '../../../images/about.png';

const About = () => {
    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fw-3">About <span className="text-color">U</span>s</h2>
                <div className="card mb-3 w-100">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={aboutImg} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                

                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><h2 className="fs-5">Daily care experts</h2></Accordion.Header>
                                        <Accordion.Body>
                                            An expert is somebody who has a broad and deep competence in terms of knowledge, skill and experience through practice and education in a particular field.
                                            <div className="d-flex">
                                                
                                                  <Card>
                                                    <Card.Header><span className="text-danger">Experts are called</span></Card.Header>
                                                    <Card.Body>
                                                        
                                                        <Card.Text>
                                                            In for advice on their respective subject, but they do not always agree.
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                         </Accordion.Body>       
                                     </Accordion.Item>

                                        
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><h2 className="fs-5">Balanced care</h2></Accordion.Header>
                                        <Accordion.Body>
                                            BalancedCare is a trusted, non-profit organization, dedicated to helping the elderly and disabled, preserve and manage their finances and qualify for Medicaid.
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">Support patient wellness</span></Card.Header>
                                                    <Card.Body>

                                                        <Card.Text>
                                                            Our unique approach to care promotes healthy mind, body and spirit.
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><h2 className="fs-5">High caliber caregivers</h2></Accordion.Header>
                                        <Accordion.Body>
                                            In most locations, independent caregivers are paid between $10 – $20 per hour. The average hourly rate for home care agencies is available here.
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">Caregiver Cost</span></Card.Header>
                                                    <Card.Body>
                                                      
                                                        <Card.Text>
                                                            Can I be paid as a caregiver for my spouse is yes. Medicare does not pay.
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><h2 className="fs-5">A trusted partner</h2></Accordion.Header>
                                        <Accordion.Body>
                                            Trust is the social glue that holds business relationships together. partners who trust each other spend less time and energy protecting negotiations.
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">Peace of mind</span></Card.Header>
                                                    <Card.Body>

                                                        <Card.Text>
                                                            Nano Home Care is the trusted referral choice for elder care professionals.
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    
                                    
                            
                              </Accordion>

                          </div>
                      </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;