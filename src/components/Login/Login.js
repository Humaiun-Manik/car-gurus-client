import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from './../../assets/images/login-img.jpg';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from './../../hooks/useAuth';
import { Col, Row } from 'react-bootstrap';
import google from './../../assets/images/google.png'

const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const { allContext } = useAuth();
    const { loginUser, saveUser } = allContext;
    const [loginInfo, setLoginInfo] = useState({});
    const [user, setUser] = useState({})

    const location = useLocation();
    const redirect_url = location?.state?.from?.pathname || '/dashboard';
    const path = useNavigate();

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;

                const loggeduser = {
                    name: displayName,
                    mail: email
                }

                setUser(loggeduser);
                saveUser(user.email, user.displayName, 'PUT')
                path(redirect_url)
            })
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginInfo = { ...loginInfo };
        newloginInfo[field] = value;
        setLoginInfo(newloginInfo);

    }
    const handleLogin = e => {
        loginUser(loginInfo.email, loginInfo.password, redirect_url);
        e.preventDefault();
    }

    return (
        <div className="login">
            <Row>
                <Col md={2}></Col>
                <Col sm={12} md={4}>
                    <img className='img-fluid w-100' src={login} alt="login-img" />
                </Col>
                <Col sm={12} md={4}>
                    <div className="login-form text-center">
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>
                            <input type="email" placeholder="Enter your email" name="email" onChange={handleOnChange} /><br />
                            <input type="password" placeholder="Password" name="password" onChange={handleOnChange} /><br />
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </form>
                        <button className='google-btn' onClick={handleGoogleSignIn}>
                            <img src={google} alt="google" /> <span>Google Sign In</span>
                        </button><br />
                        <Link className='redirect' to="/register">
                            Do you New User?Please Register!!
                        </Link>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default Login;