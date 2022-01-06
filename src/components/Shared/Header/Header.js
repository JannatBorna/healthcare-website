import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';
import icon from '../../../images/icon/bangladesh.png'
import { HashLink } from 'react-router-hash-link';


import './Header.css';

const Header = () => {
    const { user, logOut} = useAuth();
    return (
        <div>

            <Navbar expand="lg">
                <Container fluid>
                    <div className='header mt-2'>
                        <div>
                            <Navbar.Brand href="#"><span className='headline_header'>Lifeline Medical</span> <i class="fas fa-clinic-medical"></i></Navbar.Brand>

                        </div>

                        <div>

                        </div>





                        <div>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <div className='d-flex'>
                                    <Nav.Link as={HashLink} to="/services"><i className="fas fa-layer-group mx-2"></i></Nav.Link>

                                    <Nav.Link as={HashLink} to="/cartpage"><i className="fas fa-shopping-cart mx-2"></i></Nav.Link>

                                </div>
                            </Nav>
                        </div>

                    </div>

                </Container>
            </Navbar>



            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000'
            }} />



            <div className='navbar_section'>
                <div>
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li" >
                            <Nav.Link as={HashLink} to="/" className='header_navbar'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={HashLink} to="/services" className='header_navbar'>Services</Nav.Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Nav.Link as={HashLink} to="/about" className='header_navbar'>About</Nav.Link>
                        </Nav.Item>

                        {
                            user?.email ?
                                <NavDropdown className="text" title="Signed in as:" id="basic-nav-dropdown">
                                    <div>
                                        <p className="text-danger mx-4" href="#login">Name- {user?.displayName}</p>

                                        <p className="text-danger mx-4" href="#login">Email- {user?.email}</p>

                                    </div>

                                    <br />

                                    <Button onClick={logOut}
                                        className="btn-logout mx-2" variant="secondary">Logout
                                    </Button>
                                </NavDropdown>




                                :

                                <Nav.Item as="li">
                                    <Nav.Link as={HashLink} to="/login" className='header_navbar login_text' >Login</Nav.Link>
                                </Nav.Item>

                        }
                    </Nav>
                </div>

                <div>
                    <Nav className="justify-content-end all_dropDown">
                        <NavDropdown title={<img className='drop_down' src={icon} alt="" />} id="navbarScrollingDropdown" className='nav_dropDown '>
                            <NavDropdown.Item href="#action3">বাংলা</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                        </NavDropdown>

                        <p className=' break_point mx-2'>|</p>


                        <NavDropdown title="$" id="navbarScrollingDropdown" className='nav_dropDown'>
                            <NavDropdown.Item href="#action4">৳ take</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">€ Euro</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">$ US Dollar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </div>


        </div> 
        // <Navbar collapseOnSelect expand="lg" className="header" sticky="top">
        //     <Container >
        //         <Navbar.Brand as={ HashLink } to="#home">
        //             Lifeline Medical <i class="fas fa-clinic-medical"></i>
                    
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" header-text"/>
        //         <Navbar.Collapse id="responsive-navbar-nav" >
        //             <Nav className="me-auto">
        //                 <Nav.Link as={ HashLink } to="/home#home" className=" header-text">Home</Nav.Link>
        //                 <Nav.Link as={ HashLink } to="/services#services" className=" header-text">Services</Nav.Link>
        //                 {/* <Nav.Link as={ HashLink } to="/banner#banner" className=" header-text">Banner</Nav.Link> */}
        //                 {/* <Nav.Link as={ HashLink } to="/about#about" className=" header-text">About</Nav.Link> */}
        //                 <Nav.Link as={ HashLink } to="/event#event" className=" header-text">Event</Nav.Link>
        //                 <Nav.Link as={ HashLink } to="/our team#our team" className=" header-text">Our Team</Nav.Link>
        //                 <Nav.Link as={ HashLink } to="/appointments#appointments" className=" header-text">Appointments</Nav.Link>
        //             </Nav>    
                    
        //             <Nav>
        //                 {
        //                     user?.email ?
        //                     <Button onClick={logOut} className="btn-logout mx-2" variant="secondary">Logout</Button>
        //                     :
        //                     <Nav.Link as={ HashLink } to="/login" className="header-text mx-3">Login</Nav.Link>
                            
        //                 }

        //                 <Navbar.Text>
        //                     <span className="text">Signed in as:</span> <a href="#login">{user?.displayName}</a>
        //                 </Navbar.Text>
        //             </Nav>    
                                
                        
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
};

export default Header;

                        


                    
                