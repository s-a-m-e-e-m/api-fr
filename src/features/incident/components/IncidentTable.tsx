import { Link } from "react-router-dom";
import type { Incident } from "../types";

const IncidentTable = ({ incidents }: { incidents: Incident[] }) => {
    if (!incidents || incidents.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-md p-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-700">
                    No Incidents Found
                </h2>
                <p className="mt-2 text-gray-500">
                    Great! No incidents have been reported yet.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
            <div className="px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                    Incident History
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                    Complete record of all incidents detected by the monitoring system.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-gray-700">
                            <th className="px-5 py-3 font-semibold">
                                Endpoint
                            </th>

                            <th className="px-5 py-3 font-semibold">
                                Status
                            </th>

                            <th className="px-5 py-3 font-semibold">
                                Severity
                            </th>

                            <th className="px-5 py-3 font-semibold">
                                Acknowledged
                            </th>

                            <th className="px-5 py-3 font-semibold">
                                Started At
                            </th>

                            <th className="px-5 py-3 font-semibold text-center">
                                Details
                            </th>

                            <th className="px-5 py-3 font-semibold text-center">
                                Endpoint
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {incidents.map((incident) => (
                            <tr
                                key={incident._id}
                                className="border-t hover:bg-gray-50 transition"
                            >
                                <td className="px-5 py-4">
                                    <Link
                                        to={`/endpoint/${incident.endpointId}`}
                                        className="text-blue-600 hover:underline font-medium break-all"
                                    >
                                        {incident.endpointId}
                                    </Link>
                                </td>

                                <td className="px-5 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${
                                            incident.status.toLowerCase() ===
                                            "resolved"
                                                ? "bg-green-100 text-green-700"
                                                : incident.status.toLowerCase() ===
                                                  "open"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >
                                        {incident.status}
                                    </span>
                                </td>

                                <td className="px-5 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${
                                            incident.aiAnalysis.severityLevel.toLowerCase() ===
                                            "critical"
                                                ? "bg-red-100 text-red-700"
                                                : incident.aiAnalysis.severityLevel.toLowerCase() ===
                                                  "high"
                                                ? "bg-orange-100 text-orange-700"
                                                : incident.aiAnalysis.severityLevel.toLowerCase() ===
                                                  "medium"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {incident.aiAnalysis.severityLevel}
                                    </span>
                                </td>

                                <td className="px-5 py-4">
                                    <span
                                        className={`font-semibold ${
                                            incident.acknowledged
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {incident.acknowledged ? "Yes" : "No"}
                                    </span>
                                </td>

                                <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                                    {new Date(
                                        incident.startTime
                                    ).toLocaleString()}
                                </td>

                                <td className="px-5 py-4 text-center">
                                    <Link
                                        to={`/incident/${incident._id}`}
                                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        View
                                    </Link>
                                </td>

                                <td className="px-5 py-4 text-center">
                                    <Link
                                        to={`/endpoint/${incident.endpointId}`}
                                        className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        Endpoint
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IncidentTable;