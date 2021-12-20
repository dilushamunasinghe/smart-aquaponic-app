import React from 'react'
import { Navigate } from 'react-router-dom'
import { checkAuth } from '../services/authService';

export default function AuthRoute({
    children,
}) {
    let isAuthenticated = checkAuth();

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
}
