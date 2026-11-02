import Loader from "../../../components/ui/Loader";
import DashboardHeader from "../components/DashboardHeader";
import EndpointTable from "../components/EndpointTable";
import StatsCards from "../components/StatsCards";
import { useDashboard } from "../hooks/useDashboard";

const Dashboard = () => {

    const { endpoints, loading } = useDashboard();

    if (loading) {
        return <Loader />;
    }

    return (

        <div className="space-y-8">

            <DashboardHeader />

            <StatsCards endpoints={endpoints} />

            <EndpointTable endpoints={endpoints} />

        </div>

    );
};

export default Dashboard;