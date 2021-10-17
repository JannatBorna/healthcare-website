import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import Image from '../../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="header" sticky="top">
            <Container >
                <Navbar.Brand href="#home">
                   
                    <img className="image" src={Image} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" header-text"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className=" header-text">Home</Nav.Link>
                        <Nav.Link href="#About" className=" header-text">About</Nav.Link>
                        <Nav.Link href="#services" className=" header-text">Services</Nav.Link>
                        <Nav.Link href="#event" className=" header-text">Event</Nav.Link>
                        <Nav.Link href="#our term" className=" header-text">Our Team</Nav.Link>
                        <Nav.Link href="#contact" className=" header-text">Contact</Nav.Link>
                    </Nav>    
                    
                    <Nav>
                        <Button className="btn-logout mx-2" variant="secondary">Logout</Button>
                        <Nav.Link href="/login" className=" header-text mx-3">Login</Nav.Link>
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

                        


                    
                