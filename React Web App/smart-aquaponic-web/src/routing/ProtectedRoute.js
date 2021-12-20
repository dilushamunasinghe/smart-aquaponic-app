import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { checkAuth } from '../services/authService';

export default function ProtectedRoute({
    children,
}) {
    let isAuthenticated = checkAuth();
    let location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}
