import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { allContext } = useAuth();
    const { user, isLoading } = allContext;
    const location = useLocation();

    if (isLoading) {
        return (
            <div className='text-center my-5 py-5'>
                <Spinner animation="border" role="status" variant="success">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    };

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;