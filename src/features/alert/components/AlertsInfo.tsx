import { Link } from "react-router-dom";
import type { Alert } from "../types";

const AlertsInfo = ({ alerts }: { alerts: Alert[] }) => {

    if (!alerts || alerts.length === 0) {
        return (
            <div className="card py-12 text-center">

                <h2 className="text-2xl font-semibold">
                    No Alerts
                </h2>

                <p className="mt-3 text-gray-500">
                    Lucky you! All your APIs are running smoothly.
                </p>

            </div>
        );
    }

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <h2 className="section-title">
                    Alert History
                </h2>

                <span className="text-sm text-gray-500">
                    {alerts.length} Alerts
                </span>

            </div>

            <div className="space-y-5">

                {alerts.map((alert) => (

                    <div
                        key={alert._id}
                        className="card space-y-4"
                    >

                        <div className="flex items-center justify-between">

                            <span className="text-sm text-gray-500">
                                {new Date(alert.sentAt).toLocaleString()}
                            </span>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    alert.sent
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                }`}
                            >
                                {alert.sent ? "Sent" : "Pending"}
                            </span>

                        </div>

                        <div>

                            <h3 className="font-semibold text-lg">
                                Alert Message
                            </h3>

                            <p className="mt-2 text-gray-600">
                                {alert.message}
                            </p>

                        </div>

                        <div className="flex flex-wrap gap-3">

                            <Link
                                to={`/endpoint/${alert.endpointId}`}
                                className="btn-primary"
                            >
                                View Endpoint
                            </Link>

                            <Link
                                to={`/incidents/endpoint/${alert.endpointId}`}
                                className="btn-secondary"
                            >
                                Related Incidents
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default AlertsInfo;