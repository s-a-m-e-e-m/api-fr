import { FaWatchmanMonitoring } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { logoutUser } from "../../features/auth/api/auth.api";

const Navbar = () => {
    const { isAuthenticated, user, setUser } = useAuth();

    const handleLogout = async () => {
        try {
        await logoutUser();
        setUser(null);
        } catch (error) {
        console.error("Logout failed:", error);
        }
    }

     return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow-md z-50">
            <div className="h-full px-6 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-3 text-2xl font-bold"
                >
                    <FaWatchmanMonitoring className="text-blue-400" />
                    <span>API PING</span>
                </Link>

                <div className="flex items-center gap-5">

                    {isAuthenticated && (
                        <span className="font-medium">
                            Hi, {user?.name}
                        </span>
                    )}

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="btn-danger"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="btn-primary"
                        >
                            Login
                        </Link>
                    )}

                </div>

            </div>
        </nav>
    );
}

export default Navbar;