import {Navigate} from "react-router-dom";
import {useAuth} from "../context/authContext";

export const ProtectedRoute = ({children}) => {
    const {user} = useAuth();
    if (!user) return <Navigate to="/auth/login" />
    return <>{children}</>;
}
