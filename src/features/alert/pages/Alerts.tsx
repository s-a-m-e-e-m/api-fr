import Loader from "../../../components/ui/Loader";
import AlertsInfo from "../components/AlertsInfo";
import { useAlerts } from "../hooks/useAlerts";

const Alerts = () => {
    const { alerts, loading } = useAlerts();
    if (loading) {
        return <Loader />;
    }

    return (
        <div className="space-y-8">

            <div>

                <h1 className="page-title">
                    Alerts
                </h1>

                <p className="mt-2 text-gray-500">
                    All alerts generated for your monitored endpoints.
                </p>

            </div>

            <AlertsInfo alerts={alerts} />

        </div>
    );
}

export default Alerts;