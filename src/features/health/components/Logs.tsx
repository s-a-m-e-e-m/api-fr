import type { HealthLog } from "../types";

function getFormattedJson(responseBody: string): string {
    if (!responseBody || !responseBody.trim()) return "";

    try {
        const parsed = JSON.parse(responseBody);
        // Pretty-prints the JSON with 2-space indentation
        return JSON.stringify(parsed, null, 2);
    } catch {
        // Return original string if it wasn't JSON (e.g., HTML or plain text)
        return responseBody;
    }
}

const Logs = ({ healthLogs }: { healthLogs: HealthLog[] }) => {

    if (!healthLogs || healthLogs.length === 0) {
        return <p>No health logs available.</p>;
    }

    return (

        <div className="card">

            <div className="flex items-center justify-between mb-5">

                <h2 className="section-title">
                    Health History
                </h2>

                <span className="text-sm text-gray-500">
                    {healthLogs.length} Logs
                </span>

            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full border-collapse">

                    <thead className="bg-gray-100">

                        <tr className="border-b hover:bg-gray-50">

                            <th className="px-4 py-3 text-left">Status</th>

                            <th className="px-4 py-3 text-left">Status Code</th>

                            <th className="px-4 py-3 text-left">Latency (ms)</th>

                            <th className="px-4 py-3 text-left">Response Body</th>

                            <th className="px-4 py-3 text-left">Checked At</th>

                        </tr>

                    </thead>

                    <tbody>

                        {healthLogs.map((log) => (
                            <tr key={log._id} className="border-b hover:bg-gray-50">

                                <td className="px-4 py-3">

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${log.status === "UP"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >

                                        {log.status}

                                    </span>

                                </td>

                                <td className="px-4 py-3"><span
                                    className={`font-semibold ${log.statusCode >= 500
                                        ? "text-red-600"
                                        : "text-green-600"
                                        }`}
                                >{log.statusCode}</span></td>

                                <td className="px-4 py-3"><span
                                    className={`font-semibold ${log.latency > 1000
                                        ? "text-red-600"
                                        : log.latency > 300
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                        }`}
                                >{log.latency} ms</span></td>

                                <td className="px-4 py-3"><details>

                                    <summary className="cursor-pointer text-blue-600">

                                        View Response

                                    </summary>

                                    <pre className="mt-3 rounded bg-gray-100 p-3 text-xs overflow-auto max-h-72">

                                        {getFormattedJson(log.responseBody)}

                                    </pre>

                                </details>
                                </td>

                                <td className="px-4 py-3">{new Date(log.checkedAt).toLocaleString()}</td>

                            </tr>
                        ))}

                    </tbody>

                </table>
                
            </div>

        </div>
    )
}

export default Logs;