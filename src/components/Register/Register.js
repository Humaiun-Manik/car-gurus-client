import React, { useState } from 'react';
import { CircularProgress, Alert } from '@mui/material';
import login from './../../assets/images/login-img.jpg';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { Col, Row } from 'react-bootstrap';

const Register = () => {

    const { allContext } = useAuth();
    const { user, registerUser, isLoading, authError } = allContext;
    const [registerInfo, setRegisterInfo] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterInfo = { ...registerInfo };
        newRegisterInfo[field] = value;
        setRegisterInfo(newRegisterInfo);
    };
    const handleregister = e => {
        if (registerInfo.password !== registerInfo.password2) {
            alert('Your Password Did not Matched');
            return;
        };

        registerUser(registerInfo.email, registerInfo.password, registerInfo.name);
        e.preventDefault();
    };

    return (
        <div className="login">
            <Row>
                <Col md={2}></Col>
                <Col sm={12} md={4}>
                    <img className='img-fluid w-100' src={login} alt="login-img" />
                </Col>
                <Col sm={12} md={4}>
                    <div className="login-form text-center">
                        <h1>Register</h1>
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {!isLoading && <form onSubmit={handleregister} >
                            <input type="text" placeholder="Enter your name" name="name" onChange={handleOnChange} /><br />
                            <input type="email" placeholder="Enter your email" name="email" onChange={handleOnChange} /><br />
                            <input type="password" placeholder="Password" name="password" onChange={handleOnChange} /><br />
                            <input type="password" placeholder="Re-Type Password" name="password2" onChange={handleOnChange} /><br />
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        <Link className='redirect' to="/login">
                            Do you Have Account? Login
                        </Link>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default Register;