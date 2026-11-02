import Loader from "../../../components/ui/Loader";
import IncidentTable from "../components/IncidentTable";
import { useIncidents } from "../hooks/useIncidents";

const Incidents = () => {
    const { incidents, loading } = useIncidents();

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Incident History
                    </h1>

                    <p className="text-gray-500 mt-1">
                        View all detected outages and recovery reports.
                    </p>
                </div>

                <div className="card px-5 py-3 text-center">
                    <p className="text-sm text-gray-500">
                        Total Incidents
                    </p>

                    <p className="text-2xl font-bold text-red-600">
                        {incidents.length}
                    </p>
                </div>

            </div>

            <IncidentTable incidents={incidents} />

        </div>
    );
};

export default Incidents;