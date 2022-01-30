import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import useAuth from './../../hooks/useAuth';
import './Dashboard.css';
import car from './../../assets/images/car.jpg';

const Dashboard = () => {

    const { allContext } = useAuth();
    const { user } = allContext;

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-container">
                <div className="car">
                    <img className='img-fluid w-100' src={car} alt="" />
                </div>
                <div>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;