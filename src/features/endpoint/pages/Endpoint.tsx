import { useParams } from "react-router-dom";
import Loader from "../../../components/ui/Loader";
import EndpointInfo from "../component/EndpointInfo";
import { useEndpoint } from "../hooks/useEndpoint";

const Endpoint = () => {

    const { id } = useParams<{ id: string }>();

    const { endpoint, loading } = useEndpoint(id!);

    if (loading) {
        return <Loader />;
    }

    if (!endpoint) {
        return (
            <div className="card py-12 text-center">

                <h2 className="text-2xl font-semibold">
                    Endpoint Not Found
                </h2>

                <p className="mt-3 text-gray-500">
                    This endpoint may have been deleted.
                </p>

            </div>
        );
    }

    return (
        <div className="space-y-6">

            <div>

                <h1 className="page-title">
                    Endpoint Details
                </h1>

                <p className="mt-2 text-gray-500">
                    View configuration and latest monitoring status.
                </p>

            </div>

            <EndpointInfo endpoint={endpoint} />

        </div>
    );
};

export default Endpoint;