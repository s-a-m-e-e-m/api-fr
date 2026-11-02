import { useParams } from "react-router-dom";
import { useHealthLogs } from "../hooks/useHealthlog";
import Loader from "../../../components/ui/Loader";
import Status from "../components/Status";
import Logs from "../components/Logs";


const HealthLogs = () => {
  const { id } = useParams<{ id: string }>();

  const { healthLogs, loading } = useHealthLogs(id!);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="page-title">
          Health Logs
        </h1>

        <p className="mt-2 text-gray-500">
          Complete monitoring history for this endpoint.
        </p>
      </div>

      <Status healthLogs={healthLogs} />

      <Logs healthLogs={healthLogs} />

    </div>
  )
}

export default HealthLogs;
