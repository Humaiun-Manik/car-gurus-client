import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import logo from './../../assets/images/cta-logo.png';
import './Header.css';

const Header = () => {

    const { allContext } = useAuth();
    const { user, logOut } = allContext;

    return (
        <>
            <Navbar className='px-5 py-3 nav_bar' collapseOnSelect expand="lg" variant="light" fixed='top'>
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
                        <Nav.Link as={Link} to="/allProducts">All Products</Nav.Link>
                        {
                            user?.email &&
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <span className="display_name" style={{ color: 'white' }}>{user.displayName}</span>
                                <img src={user.photoURL} className="user_img" />
                            </>
                        }

                        {
                            user?.email ? (
                                <Nav.Link className='login_btn' as={Link} to="/login" onClick={logOut}>LogOut</Nav.Link>
                            ) : (
                                <Nav.Link className='login_btn' as={Link} to="/login">LOGIN</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;