import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/others/heartbeat.png';
import './Header.css';

const Header = () => {
    const { user, logOut} = useAuth();

  return (
        <div className='sticky-top'>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                     <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <Navbar.Brand href="#"> <img src={logo} alt="" className='logo'/> <span className='logo-name'>Dr. S</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                    </Nav>

                    <Nav className="d-flex">
                        <Navbar.Collapse id="navbarScroll">
                        <Nav.Link as={HashLink} to="/" className='header-list'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services" className='header-list'>Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about" className='header-list'>About</Nav.Link>
                        <Nav.Link as={HashLink} to="/blog" className='header-list'>Blog</Nav.Link>
                    {

                    user?.email ?

                    <NavDropdown title="Signed in as:" id="basic-nav-dropdown">
                        <div>
                            <p className="text-danger mx-4" href="#login">Name- {user?.displayName}</p>
                            <p className="text-danger mx-4" href="#login">Email- {user?.email}</p>
                        </div>
               
                        <br />

                        <button onClick={logOut}
                            className="button mx-2" variant="secondary">Logout
                        </button>
                    </NavDropdown>
             
                    :

                    <Nav.Item as="li" className='login-nav'>   
                        <Nav.Link as={HashLink} to="/login" className='login-list'>Login</Nav.Link>
                    </Nav.Item>

                    }
          
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;