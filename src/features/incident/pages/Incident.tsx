import { useParams } from "react-router-dom";
import Loader from "../../../components/ui/Loader";
import IncidentInfo from "../components/IncidentInfo";
import { useIncidentById } from "../hooks/useIncident";

const Incident = () => {
    const { id } = useParams<{ id: string }>();
    const { incident, loading } = useIncidentById(id!);

    if (loading) {
        return <Loader />;
    }

    if (!incident) {
        return (
            <div className="card text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Incident not found
                </h2>

                <p className="text-gray-500 mt-2">
                    The requested incident doesn't exist.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Incident Report
                </h1>

                <p className="text-gray-500 mt-1">
                    Complete AI-generated incident analysis.
                </p>
            </div>

            <IncidentInfo incident={incident} />
        </div>
    );
};

export default Incident;