import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import Image from '../../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="header-color text-white" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                   
                    <img className="image" src={Image} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#event">Event</Nav.Link>
                        <Nav.Link href="#our term">Our Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>    
                    
                    <Nav>
                        <Button className="btn-logout" variant="secondary">Logout</Button>
                        <Nav.Link href="/login">Login</Nav.Link>       
                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>      
                    </Nav>    
                                
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

                        


                    
                