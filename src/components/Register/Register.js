import React from 'react';
import { Form, Button, FloatingLabel, Row, Col, Container } from 'react-bootstrap';
import './Register.css';
import img from '../../images/signup.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';




const Register = () => {
    
    const { signInWithGoogle, signInWithGithub, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, error, handleResetPassword} = useAuth();
    ///register before private page -- google 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/details';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)

            })
    }
///github
    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri)

            })
    }



    return (
        <div className="from ">
            <h1 className="text-center fw-3 my-5">Welcome To Our <span className="text-color">Lifeline Medical</span></h1>
            <Container>
                
                <Form onSubmit={handleRegistration}>
                    <Row>
                        <Col lg={5} md={7} className="input-from">
                            <div className="my-5 mx-5">

                                <FloatingLabel
                                    label="Enter Name"
                                    className="mb-3 w-75 mx-auto"
                                  >  
                                <Form.Control onBlur={handleNameChange} placeholder="Enter Name" />
                                 </FloatingLabel>   
                                    
                                

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3 w-75 mx-auto"
                                >
                                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="name@example.com" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
                                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                                </FloatingLabel>
                                <div className="row mb-3 text-danger fw-5">{error}</div>

                                

                                

                                <Button className="Reg-btn my-5" variant="primary" type="submit">
                                    Register
                                </Button>
                                <Link to="/"></Link>
                                <span>I have an account <Link to="/login">Login</Link></span><br />
                     
                                
                               {/*----google------ */}
                                <button onClick={handleGoogleLogin}  className="online-btn google"><i class="fab fa-google"></i>Google</button>
                              
                              {/*-------github--------- */}
                                <button onClick={handleGithubLogin} className="online-btn github"><i class="fab fa-github"></i> Github</button>
                            
                         </div>
                            
                        </Col>

                        <Col lg={7} md={5}>
                            <div>
                                <img className="w-75" src={img} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Form>

           </Container>
        </div>
   );
};

export default Register;
        
                        


    