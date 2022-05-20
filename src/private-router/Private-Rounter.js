import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
    const isAuth = localStorage.getItem("isAuth");
    let location = useLocation();
    return isAuth ? children : < Navigate to="/login" state={{ from: location }} replace />
}