import { Link, useLocation } from "react-router-dom";
import { FaServer, FaBell, FaExclamationTriangle } from "react-icons/fa";
 
const Sidebar = () => {

    const location = useLocation();

    const linkClass = (path: string) => 
        `flex items-center gap-3 rounded-lg px-4 py-3 transition
        ${
            location.pathname === path
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`;
        

    return (
        <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-gray-800 p-4">
            <nav className="flex flex-col gap-2">
                <Link to="/" className={linkClass("/")}>
                    <FaServer />
                    Endpoints
                </Link>

                <Link to="/incidents" className={linkClass("/incidents")}>
                    <FaExclamationTriangle />
                    Incidents
                </Link>

                <Link to="/alerts" className={linkClass("/alerts")}>
                    <FaBell />
                    Alerts
                </Link>

            </nav>
            
        </aside>
    )
}

export default Sidebar