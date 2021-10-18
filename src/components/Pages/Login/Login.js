import React from 'react';
import { Form, Button, FloatingLabel, Row, Col, Container } from 'react-bootstrap';
import './Login.css';
import img from '../../../images/login2.png';
import { Link } from 'react-router-dom';
//import useAuth from './../../../hook/useAuth';


const Login = () => {
    //const { signInWithGoogle, signInWithGithub, processLogin } = useAuth();
    return (
        <div className="from my-5">
            <h1 className="text-center fw-3 my-5"><span className="text-color">L</span>ogin Now</h1>
           <Container>
                <Row>
                    <Col lg={5} md={7} className="input-login">
                        <div className="my-5">
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

                            <Button className="login-btn my-5" variant="primary" type="submit">
                                Log-in
                            </Button>

                            <Link href="/">Forgot password</Link><br />
                            <span>Create a new account <a href="/register">Register</a></span><br/>

                            <button className="online-btn google"><i class="fab fa-google"></i> Google</button>
                            
                            <button className="online-btn github "><i class="fab fa-github"></i> Github</button>

                        </div>
                       </Col>

                      <Col lg={7} md={5}>
                        <div>
                            <img className="w-75 mx-5" src={img} alt="" />
                        </div>

                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default Login;