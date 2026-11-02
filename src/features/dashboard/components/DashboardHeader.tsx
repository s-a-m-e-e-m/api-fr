import { Link } from "react-router-dom";
import { FaPlus, FaBell, FaExclamationTriangle } from "react-icons/fa";

const DashboardHeader = () => {
    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
                <h1 className="page-title">
                    Dashboard
                </h1>

                <p className="mt-2 text-gray-500">
                    Monitor all your APIs and their health status in real time.
                </p>
            </div>

            <div className="flex flex-wrap gap-3">

                <Link
                    to="/create-endpoint"
                    className="btn-success flex items-center gap-2"
                >
                    <FaPlus />
                    Create Endpoint
                </Link>

                <Link
                    to="/incidents"
                    className="btn-primary flex items-center gap-2"
                >
                    <FaExclamationTriangle />
                    Incidents
                </Link>

                <Link
                    to="/alerts"
                    className="btn-secondary flex items-center gap-2"
                >
                    <FaBell />
                    Alerts
                </Link>

            </div>

        </div>
    );
};

export default DashboardHeader;