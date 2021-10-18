import React from 'react';
import { Form, Button, FloatingLabel, Row, Col, Container } from 'react-bootstrap';
import './Register.css';
import img from '../../images/signup.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';




const Register = () => {
    
    const { signInWithGoogle, signInWithGithub } = useAuth();
    return (
        <div className="from ">
            <h1 className="text-center fw-3 my-5">Welcome To Our <span className="text-color">Lifeline Medical</span></h1>
           <Container>
                
                <>
                    <Row>
                        <Col lg={5} md={7} className="input-from">
                            <div className="my-5 mx-5">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3 w-75 mx-auto"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>

                                <Button className="Reg-btn my-5" variant="primary" type="submit">
                                Register
                                </Button>
                                <Link to="/"></Link>
                                <span>I have an account <Link to="/login">Login</Link></span><br />
  
                               {/*----google------ */}
                                <button onClick={signInWithGoogle}  className="online-btn google"><i class="fab fa-google"></i>Google</button>
                              
                              {/*-------github--------- */}
                                <button onClick={signInWithGithub} className="online-btn github"><i class="fab fa-github"></i> Github</button>
                            
                         </div>
                            
                        </Col>

                        <Col lg={7} md={5}>
                            <div>
                                <img className="w-75" src={img} alt="" />
                            </div>
                        </Col>
                    </Row>
                </>

           </Container>
        </div>
   );
};

export default Register;
        
                        


    