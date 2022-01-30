import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer text-center mt-5">
            <div className="footer-menu">
                <Link to="/Home">
                    Home
                </Link>
                <Link to="/Register">
                    Register
                </Link>
            </div>
            <p>&copy;2022 Made by Humaiun Kabir</p>
        </div>
    );
};

export default Footer;