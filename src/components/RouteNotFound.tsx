import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";

export default function RouteNotFound() {
    
    // Returns the current location
    const location = useLocation();

    useEffect(() => {

        console.error(`Route not found: ${location.pathname}`)

    }, [location]);
    
    return (
        <Navigate to="/"/>
    );
}