import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import car from './../../assets/images/banner2.jpg'
import { Col, Row } from 'react-bootstrap';

const Dashboard = () => {

    return (

        <div className='dashboard'>
            <Row className='g-0'>
                <h1 className='py-5'>Dashboard</h1>
                <Col sm={12} md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col sm={12} md={9}>
                    <img className='img-fluid w-100' src={car} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;