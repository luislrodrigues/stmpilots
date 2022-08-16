import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const PrivateRoute = () => {
    const { tokens } = useContext(AuthContext);
    return tokens ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;