import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {

    const { allContext } = useAuth();
    const { user, admin } = allContext;

    return (
        <div className="sidebar text-center">
            <img src={user.photoURL} className="userimg" /><br />
            <div className="user_name">
                <h4>{user.displayName}</h4>
            </div>
            <ul>

                {admin && <div>
                    <li><Link to="/MakeAdmin">Add Admin</Link></li>
                    <li><Link to="/ManageAllOrder">Manage All Order</Link></li>
                    <li><Link to="/AddService">Add Service</Link></li>
                </div>}
                <li><Link to="/myOrder">My Order</Link></li>

                <li><Link to="/addReview">Add Review</Link></li>

                <li><Link to="/allProducts">All Products</Link></li>
                <li><Link to="/payMent">Pay Ment</Link></li>
            </ul>

        </div>
    );
};

export default Sidebar;