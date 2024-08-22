import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    // return true;
    const tokenString = localStorage.getItem('token');

    if (!tokenString) return false;

    try {
        const tokenObj = JSON.parse(tokenString);

        return !!tokenObj.token && !!tokenObj.user;
    } catch (error) {
        return false;
    }
};


const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
