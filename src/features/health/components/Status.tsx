import type { HealthLog } from "../types";

const Status = ({ healthLogs }: { healthLogs: HealthLog[] }) => {
    if (!healthLogs || healthLogs.length === 0) {
        return <p>No health logs available.</p>;
    }
    const latestLog = healthLogs[0];

    const totalLogs = healthLogs.length;
    const upLogs = healthLogs.filter(log => log.status.toLowerCase() === "up").length;
    const downLogs = totalLogs - upLogs;

    const averageLatency = healthLogs.reduce((acc, log) => acc + log.latency, 0) / healthLogs.length;
    const uptimePercentage = (healthLogs.filter(log => log.status.toLowerCase() === "up").length / healthLogs.length) * 100;

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="card">
                <p className="text-gray-500">Latest Status</p>

                <h2 className={`mt-2 text-3xl font-bold ${latestLog.status === "UP"
                    ? "text-green-600"
                    : "text-red-600"
                    }`}>
                    {latestLog.status}
                </h2>
            </div>

            <div className="card">
                <p className="text-gray-500">Average Latency</p>

                <h2 className="mt-2 text-3xl font-bold">
                    {averageLatency.toFixed(2)} ms
                </h2>
            </div>

            <div className="card">
                <p className="text-gray-500">Successful Checks</p>

                <h2 className="mt-2 text-3xl font-bold text-green-600">
                    {upLogs}
                </h2>
            </div>

            <div className="card">
                <p className="text-gray-500">Failed Checks</p>

                <h2 className="mt-2 text-3xl font-bold text-red-600">
                    {downLogs}
                </h2>
            </div>

            <div className="card">
                <p className="text-gray-500">Uptime Percentage</p>
                <h2 className="mt-2 text-3xl font-bold">
                    {uptimePercentage.toFixed(2)}%
                </h2>
            </div>

            <div className="card mt-6">

                <h3 className="section-title">
                    Latest Check
                </h3>

                <div className="grid gap-4 md:grid-cols-3">

                    <span className="text-gray-500">Status Code</span>
                    <span>{latestLog.statusCode}</span>

                    <span className="text-gray-500">Latency</span>
                    <span>{latestLog.latency} ms</span>

                    <span className="text-gray-500">Checked At</span>
                    <span>{new Date(latestLog.checkedAt).toLocaleString()}</span>

                </div>

            </div>

        </div>
    )
}

export default Status;