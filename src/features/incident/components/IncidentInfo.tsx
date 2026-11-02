import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { Incident } from "../types";

const Info = ({ label, value }: { label: string; value: ReactNode }) => (
    <div>
        <p className="text-sm text-gray-500">{label}</p>
        <div className="mt-1 font-semibold break-all">{value}</div>
    </div>
);

const IncidentInfo = ({ incident }: { incident: Incident }) => {
    return (
        <div className="space-y-6">

            <div className="card">

                <h2 className="section-title">
                    Incident Overview
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <Info
                        label="Endpoint"
                        value={
                            <Link
                                to={`/endpoint/${incident.endpointId}`}
                                className="text-blue-600 hover:underline"
                            >
                                {incident.endpointId}
                            </Link>
                        }
                    />

                    <Info
                        label="Status"
                        value={
                            <span className={`rounded-full px-3 py-1 text-sm font-medium ${incident.status === "OPEN"
                                ? "bg-red-100 text-red-700"
                                : "bg-green-100 text-green-700"
                                }`}>
                                {incident.status}
                            </span>
                        }
                    />

                    <Info
                        label="Acknowledged"
                        value={
                            incident.acknowledged
                                ? "Yes"
                                : "No"
                        }
                    />

                    <Info
                        label="Reason"
                        value={incident.reason}
                    />

                    <Info
                        label="Started"
                        value={new Date(incident.startTime).toLocaleString()}
                    />

                    <Info
                        label="Resolved"
                        value={new Date(incident.endTime).toLocaleString()}
                    />

                </div>
            </div>


            <div className="card bg-indigo-50 border border-indigo-200">

                <h2 className="section-title">
                    AI Analysis
                </h2>

                <div className="space-y-6">

                    <div>

                        <p className="text-sm text-gray-500">
                            Summary
                        </p>

                        <p className="mt-2">
                            {incident.aiAnalysis.summary}
                        </p>

                    </div>

                    <div>

                        <p className="text-sm text-gray-500">
                            Probable Root Cause
                        </p>

                        <p className="mt-2 font-medium">
                            {incident.aiAnalysis.probableRootCause}
                        </p>

                    </div>

                    <div className="flex gap-8">

                        <div>

                            <p className="text-sm text-gray-500">
                                Severity
                            </p>

                            <span className="rounded-full bg-red-100 text-red-700 px-3 py-1">
                                {incident.aiAnalysis.severityLevel}
                            </span>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">
                                Generated
                            </p>

                            <p>
                                {new Date(
                                    incident.aiAnalysis.generatedAt
                                ).toLocaleString()}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card">

                <h2 className="section-title">
                    Recommended Actions
                </h2>

                {
                    incident.aiAnalysis.recommendedAction.length
                        ? (
                            <ul className="space-y-3">

                                {incident.aiAnalysis.recommendedAction.map((action, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3"
                                    >

                                        <span className="text-green-600">
                                            ✓
                                        </span>

                                        <span>
                                            {action}
                                        </span>

                                    </li>
                                ))}

                            </ul>
                        )
                        : (
                            <p className="text-gray-500">
                                No recommendations.
                            </p>
                        )
                }

            </div>

            <div className="flex flex-wrap gap-4">

                <Link
                    to={`/endpoint/${incident.endpointId}`}
                    className="btn-primary"
                >
                    View Endpoint
                </Link>

                <Link
                    to={`/healthlogs/${incident.endpointId}`}
                    className="btn-secondary"
                >
                    Health Logs
                </Link>

            </div>

        </div>
    );
};

export default IncidentInfo;
