import { Link } from "react-router-dom";
import type { Endpoint } from "../types";

const EndpointInfo = ({ endpoint }: { endpoint: Endpoint }) => {
    return (
        <div className="space-y-6">

            {/* Basic Info */}

            <div className="card">

                <h2 className="section-title">
                    Basic Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <Info label="Name" value={endpoint.name} />

                    <Info label="Method" value={endpoint.method} />

                    <Info label="URL" value={endpoint.url} />

                    <Info
                        label="Status"
                        value={
                            <span
                                className={`rounded-full px-3 py-1 text-sm font-medium ${
                                    endpoint.latestStatus === "UP"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                            >
                                {endpoint.latestStatus}
                            </span>
                        }
                    />

                    <Info
                        label="Status Code"
                        value={endpoint.lastStatusCode}
                    />

                    <Info
                        label="Latency"
                        value={`${endpoint.latestLatency} ms`}
                    />

                </div>

            </div>

            {/* Configuration */}

            <div className="card">

                <h2 className="section-title">
                    Configuration
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <Info
                        label="Expected Status"
                        value={endpoint.expectedStatus}
                    />

                    <Info
                        label="Timeout"
                        value={`${endpoint.timeout} ms`}
                    />

                    <Info
                        label="Frequency"
                        value={`${endpoint.frequency} sec`}
                    />

                    <Info
                        label="Monitoring"
                        value={
                            endpoint.enabled ? "Enabled" : "Disabled"
                        }
                    />

                    <Info
                        label="Created"
                        value={new Date(endpoint.createdAt).toLocaleString()}
                    />

                    <Info
                        label="Updated"
                        value={new Date(endpoint.updatedAt).toLocaleString()}
                    />

                </div>

            </div>

            {/* JSON */}

            <div className="card space-y-6">

                <div>

                    <h3 className="section-title">
                        Expected Response
                    </h3>

                    <pre className="rounded bg-gray-100 p-4 overflow-auto">
                        {endpoint.expectedResponse || "None"}
                    </pre>

                </div>

                <div>

                    <h3 className="section-title">
                        Headers
                    </h3>

                    <pre className="rounded bg-gray-100 p-4 overflow-auto">
                        {JSON.stringify(endpoint.headers, null, 2)}
                    </pre>

                </div>

                <div>

                    <h3 className="section-title">
                        Body
                    </h3>

                    <pre className="rounded bg-gray-100 p-4 overflow-auto">
                        {endpoint.body
                            ? JSON.stringify(endpoint.body, null, 2)
                            : "None"}
                    </pre>

                </div>

            </div>

            {/* Navigation */}

            <div className="flex flex-wrap gap-4">

                <Link
                    to={`/healthlogs/${endpoint._id}`}
                    className="btn-primary"
                >
                    Health Logs
                </Link>

                <Link
                    to={`/incidents/endpoint/${endpoint._id}`}
                    className="btn-warning"
                >
                    Incidents
                </Link>

                <Link
                    to={`/alerts/endpoint/${endpoint._id}`}
                    className="btn-secondary"
                >
                    Alerts
                </Link>

            </div>

        </div>
    );
};

export default EndpointInfo;

const Info = ({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) => (
    <div>
        <p className="text-sm font-medium text-gray-500">
            {label}
        </p>

        <div className="mt-1 font-semibold break-all">
            {value}
        </div>
    </div>
);