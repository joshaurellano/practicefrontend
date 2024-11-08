import React from 'react';
import { Navigate } from 'react-router-dom';

const TokenedRoute = ({children}) => {
    const token = sessionStorage.getItem('authToken');
    return token ? children : <Navigate to="/" />;
};

export default TokenedRoute;