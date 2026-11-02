import { Navigate } from "react-router-dom";
import Loader from "../ui/Loader";
import { useAuth } from "../../features/auth/hooks/useAuth";

const PublicRoute = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { authLoading, isAuthenticated } = useAuth();

    if (authLoading) {
        return <Loader />;
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PublicRoute;