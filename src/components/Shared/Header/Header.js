import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';
import { HashLink } from 'react-router-hash-link';


import './Header.css';

const Header = () => {
    const { user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="header" sticky="top">
            <Container >
                <Navbar.Brand as={ HashLink } to="#home">
                    Lifeline Medical <i class="fas fa-clinic-medical"></i>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" header-text"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={ HashLink } to="/home#home" className=" header-text">Home</Nav.Link>
                        <Nav.Link as={ HashLink } to="/services#services" className=" header-text">Services</Nav.Link>
                        <Nav.Link as={ HashLink } to="/banner#banner" className=" header-text">Banner</Nav.Link>
                        <Nav.Link as={ HashLink } to="/about#about" className=" header-text">About</Nav.Link>
                        <Nav.Link as={ HashLink } to="/event#event" className=" header-text">Event</Nav.Link>
                        <Nav.Link as={ HashLink } to="/our team#our team" className=" header-text">Our Team</Nav.Link>
                        <Nav.Link as={ HashLink } to="/appointments#appointments" className=" header-text">Appointments</Nav.Link>
                    </Nav>    
                    
                    <Nav>
                        {
                            user?.email ?
                            <Button onClick={logOut} className="btn-logout mx-2" variant="secondary">Logout</Button>
                            :
                            <Nav.Link as={ HashLink } to="/login" className="header-text mx-3">Login</Nav.Link>
                            
                        }

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Nav>    
                                
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

                        


                    
                