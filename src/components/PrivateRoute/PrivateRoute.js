import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
