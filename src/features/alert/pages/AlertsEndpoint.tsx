import { useParams } from "react-router-dom";
import Loader from "../../../components/ui/Loader";
import AlertsInfo from "../components/AlertsInfo";
import { useAlertsByEndpoint } from "../hooks/useAlertsByEndpoint";

const AlertsEndpoint = () => {
    const { endpointId } = useParams<{ endpointId: string }>();
    const { alerts, loading } = useAlertsByEndpoint(endpointId!);
    if (loading) {
        return <Loader />;
    }

    return (
        <div className="space-y-8">

            <div>

                <h1 className="page-title">
                    Endpoint Alerts
                </h1>

                <p className="mt-2 text-gray-500">
                    Alerts generated for this endpoint.
                </p>

            </div>

            <AlertsInfo alerts={alerts} />

        </div>
    );
}

export default AlertsEndpoint;