import { useParams } from "react-router-dom";
import Loader from "../../../components/ui/Loader";
import IncidentTable from "../components/IncidentTable";
import { useIncidentByEndpoint } from "../hooks/useIncidentByEndpoint";

const IncidentsEndpoint = () => {

    const { endpointId } = useParams<{ endpointId: string }>();

    const { incidents, loading } = useIncidentByEndpoint(endpointId!);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Endpoint Incidents
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Incident history for endpoint
                    </p>

                    <p className="font-mono text-sm text-gray-700 mt-2">
                        {endpointId}
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

export default IncidentsEndpoint;