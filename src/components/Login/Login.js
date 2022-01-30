import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from './../../assets/images/login.jpg';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from './../../hooks/useAuth';
import { Col, Row } from 'react-bootstrap';

const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const { allContext } = useAuth();
    const { loginUser, saveUser } = allContext;
    const [loginInfo, setLoginInfo] = useState({});
    const [user, setUser] = useState({})

    const location = useLocation();
    const redirect_url = location?.state?.from?.pathname || '/dashboard';
    const path = useNavigate();


    /*  const location = useLocation();
     const history = useHistory();
     const redirect_url = location.state?.from || '/Dashboard';
     console.log('came from', location.state?.from); */

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
        <div >
            <div className="login">
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid w-100' src={login} alt="login-img" />
                        {/* <img style={{ width: '50%' }} src={login} /> */}
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="login-form">
                            <h1 style={{ color: 'white' }}>Login</h1>
                            <form onSubmit={handleLogin}>
                                <input type="email" placeholder="Enter your email" name="email" onChange={handleOnChange} /><br />
                                <input type="password" placeholder="Password" name="password" onChange={handleOnChange} /><br />
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </form>
                            <button onClick={handleGoogleSignIn} class="btn btn-primary buttongoogle">  Google Sign In</button><br />
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/register">
                                Do you New User?Please Register
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Login;