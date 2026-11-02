import { Link } from "react-router-dom";
import { FaEye, FaHistory } from "react-icons/fa";
import type { Endpoint } from "../types";

const EndpointTable = ({ endpoints }: { endpoints: Endpoint[] }) => {

    if (endpoints.length === 0) {
        return (
            <div className="card py-12 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                    No Endpoints Found
                </h2>

                <p className="mt-2 text-gray-500">
                    Create your first endpoint to start monitoring APIs.
                </p>

                <Link
                    to="/create-endpoint"
                    className="btn-success mt-6 inline-block">
                    Create Endpoint
                </Link>
            </div>
        );
    }

    return (
        <div className="card">

            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    Endpoints
                </h2>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {endpoints.length} APIs
                </span>
            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full border-collapse">

                    <thead>

                        <tr className="border-b bg-gray-50">

                            <th className="px-4 py-3 text-left">
                                Name
                            </th>

                            <th className="px-4 py-3 text-left">
                                Status
                            </th>

                            <th className="px-4 py-3 text-left">
                                Status Code
                            </th>

                            <th className="px-4 py-3 text-left">
                                Latency
                            </th>

                            <th className="px-4 py-3 text-center">
                                Details
                            </th>

                            <th className="px-4 py-3 text-center">
                                Logs
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {endpoints.map((endpoint) => (

                            <tr
                                key={endpoint._id}
                                className="border-b hover:bg-gray-50 transition">

                                <td className="px-4 py-4 font-medium">
                                    {endpoint.name}
                                </td>

                                <td className="px-4 py-4">

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                                            endpoint.latestStatus === "UP"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }`}>
                                        {endpoint.latestStatus}
                                    </span>

                                </td>

                                <td className="px-4 py-4">
                                    {endpoint.lastStatusCode}
                                </td>

                                <td className="px-4 py-4">
                                    {endpoint.latestLatency} ms
                                </td>

                                <td className="px-4 py-4 text-center">

                                    <Link
                                        to={`/endpoint/${endpoint._id}`}
                                        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700">
                                        <FaEye />
                                        View
                                    </Link>

                                </td>

                                <td className="px-4 py-4 text-center">

                                    <Link
                                        to={`/healthlogs/${endpoint._id}`}
                                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-2 text-white transition hover:bg-gray-800">
                                        <FaHistory />
                                        Logs
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

export default EndpointTable;