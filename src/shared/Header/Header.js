import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../assets/images/cta-logo.png';
import './Header.css';

const Header = () => {

    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home" className='nav_brand'>
                        <img
                            alt="logo"
                            src={logo}
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center menu-items">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link to="/home#top-deals">TopDeals</Nav.Link>
                            {/* <Nav.Link to="/home#gallery">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/order">MyOrder</Nav.Link> */}
                            {/* {
                                !user?.displayName ? (
                                    <Nav.Link className='login_btn' as={Link} to="/login">LOGIN</Nav.Link>
                                ) : (
                                    <NavDropdown className='dropdown-item' title={<img src={user.photoURL} alt="" />}>
                                        <div className='text-center'>
                                            <h6>{user?.displayName}</h6>
                                            <p>{user.email}</p>
                                            <Button onClick={logOut} variant="danger">Log Out</Button>
                                        </div>
                                    </NavDropdown>
                                )
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;