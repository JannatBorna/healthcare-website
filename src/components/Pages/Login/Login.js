import React from 'react';
import { Form, Button, FloatingLabel, Row, Col, Container } from 'react-bootstrap';
import './Login.css';
import img from '../../../images/login2.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hook/useAuth';
import { HashLink } from 'react-router-hash-link';



const Login = () => {
    const { signInWithGoogle, signInWithGithub, handleRegistration, handleEmailChange, handlePasswordChange} = useAuth();
    
    ///login before private page -- google 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/details';
    
    const handleGoogleLogin = () => {
       signInWithGoogle()
        .then(result => {
        history.push(redirect_uri)
           
      })
    }

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri)

            })
    }



    

    return (
        <div className="from my-5">
            <h1 className="text-center fw-3 my-5"><span className="text-color">L</span>ogin Now</h1>
            <Container>
                <Form onSubmit={handleRegistration}>
                <Row>
                    <Col lg={5} md={7} className="input-login">
                        <div className="my-5">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3 w-75 mx-auto"
                            >
                            <Form.Control 
                            onBlur={handleEmailChange}
                            type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
                                <Form.Control 
                            onBlur={handlePasswordChange}
                                type="password" placeholder="Password" />
                            </FloatingLabel>

                            <div className="row mb-3 text-danger fw-5">{error}</div>
                              
                            <Button className="login-btn my-5" variant="primary" type="submit">
                                Log-in
                            </Button>

                            <Link href="/">Forgot password</Link><br />
                            <span>Create a new account <Link as={ HashLink } to="/register">Register</Link></span><br />
                       
                             {/*--------- Google--------- */}
                            <button onClick={handleGoogleLogin} className="online-btn google"><i class="fab fa-google"></i> Google</button>
                            
                               {/* ---------Github--------- */}
                                <button onClick={handleGithubLogin} className="online-btn github "><i className="fab fa-github"></i> Github</button>

                        </div>
                       </Col>

                      <Col lg={7} md={5}>
                        <div>
                            <img className="w-75 mx-5" src={img} alt="" />
                        </div>

                    </Col>
                </Row>
                
            </Form>
            </Container>



        </div>
    );
};

export default Login;