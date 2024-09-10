import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Component }) => {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('authToken');

    return isAuthenticated ? Component : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
