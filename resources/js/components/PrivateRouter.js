import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import Auth from "../Auh";

const PrivateRouter = ( { children } ) => {
    const location = useLocation();
    const auth = Auth.isLoggued();
    return auth ? children : <Navigate to="/auth" state={{ from: location }} replace />;
};

export default  PrivateRouter;
