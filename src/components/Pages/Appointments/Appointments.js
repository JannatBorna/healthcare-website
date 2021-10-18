import React from 'react';
import { Container, FormControl, InputGroup, Form, Row, Col } from 'react-bootstrap';
import image from '../../../images/A.png';
import './Appointments.css';

const Appointments = () => {
    return (
        <div className="my-5">
            <h2 className="text-center fw-3">Make An <span className="text-color">A</span>ppointment Now</h2>
            <Container className="appoint shadow w-75 input-form my-3">
                  <Row>
                      <Col lg={12} md={12}>
                        <>
                            <div className="w-50 my-5">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Full Name</InputGroup.Text>
                                    <FormControl aria-label="Full Name" />

                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Email</InputGroup.Text>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                                </InputGroup>

                                <InputGroup className="mb-3">

                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </span>
                                        <input data-datepicker="" class="form-control" id="birthday" type="text" placeholder="dd/mm/yyyy" required />
                                    </div>
                                </InputGroup>

                                <InputGroup>
                                    <InputGroup.Text>Massage</InputGroup.Text>
                                    <FormControl as="textarea" aria-label="With textarea" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <fieldset>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios1">
                                                Female
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Male
                                            </label>
                                        </div>
                                    </fieldset>

                                </InputGroup>
                                <button class="btn btn-gray-900" type="button">Submit</button>
                            </div>

                            <div className="image mx-5 my-5">
                                <img src={image} alt="" />

                            </div>
                        </>
                        
                      </Col>
                  </Row>
               
                </Container>
        </div>
    );
};

export default Appointments;    

                        

                        
                        
                   
                

                
            