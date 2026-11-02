import type { Endpoint } from "../types";
import {
    FaServer,
    FaCheckCircle,
    FaTimesCircle,
    FaClock
} from "react-icons/fa";

const StatsCards = ({ endpoints }: { endpoints: Endpoint[] }) => {

    const totalEndpoints = endpoints.length;

    const healthyEndpoints =
        endpoints.filter(
            endpoint => endpoint.latestStatus === "UP"
        ).length;

    const unhealthyEndpoints =
        totalEndpoints - healthyEndpoints;

    const averageLatency =
        totalEndpoints > 0
            ? (
                  endpoints.reduce(
                      (sum, endpoint) =>
                          sum + endpoint.latestLatency,
                      0
                  ) / totalEndpoints
              ).toFixed(2)
            : "0";

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="card">

                <div className="mb-4 flex items-center justify-between">

                    <h3 className="font-semibold text-gray-600">
                        Total Endpoints
                    </h3>

                    <FaServer className="text-2xl text-blue-500" />

                </div>

                <p className="text-4xl font-bold">
                    {totalEndpoints}
                </p>

            </div>

            <div className="card">

                <div className="mb-4 flex items-center justify-between">

                    <h3 className="font-semibold text-gray-600">
                        Healthy
                    </h3>

                    <FaCheckCircle className="text-2xl text-green-500" />

                </div>

                <p className="text-4xl font-bold text-green-600">
                    {healthyEndpoints}
                </p>

            </div>

            <div className="card">

                <div className="mb-4 flex items-center justify-between">

                    <h3 className="font-semibold text-gray-600">
                        Unhealthy
                    </h3>

                    <FaTimesCircle className="text-2xl text-red-500" />

                </div>

                <p className="text-4xl font-bold text-red-600">
                    {unhealthyEndpoints}
                </p>

            </div>

            <div className="card">

                <div className="mb-4 flex items-center justify-between">

                    <h3 className="font-semibold text-gray-600">
                        Avg Latency
                    </h3>

                    <FaClock className="text-2xl text-yellow-500" />

                </div>

                <p className="text-4xl font-bold">
                    {averageLatency}
                    <span className="ml-2 text-lg font-medium">
                        ms
                    </span>
                </p>

            </div>

        </div>

    );
};

export default StatsCards;