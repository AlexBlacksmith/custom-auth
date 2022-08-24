import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthContext } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default ProtectedRoute;