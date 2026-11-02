import EndpointForm from "../component/EndpointForm";

const CreateEndpoint = () => {
    return (
        <div className="space-y-6">

            <div>

                <h1 className="page-title">
                    Create Endpoint
                </h1>

                <p className="mt-2 text-gray-500">
                    Configure an API endpoint and start monitoring it in real time.
                </p>

            </div>

            <EndpointForm />

        </div>
    );
};

export default CreateEndpoint;