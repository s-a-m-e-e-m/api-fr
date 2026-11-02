import { useState } from "react";
import { useCreateEndpoint } from "../hooks/useCreateEndpoint";
import type { CreateEndpointPayload } from "../types";

const EndpointForm = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");
    const [expectedStatus, setExpectedStatus] = useState(200);
    const [expectedResponse, setExpectedResponse] = useState("");
    const [headersText, setHeadersText] = useState("{}");
    const [bodyText, setBodyText] = useState("");
    const [timeout, setTimeout] = useState(5000);
    const [frequency, setFrequency] = useState(60);
    const [enabled, setEnabled] = useState(true);

    const { createNewEndpoint } = useCreateEndpoint();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let headers = {};
        let body = null;
        try {
            headers = headersText.trim() ? JSON.parse(headersText) : {};
            body = bodyText.trim() ? JSON.parse(bodyText) : null;
        } catch (error) {
            alert("Invalid JSON in Headers or Body");
            return;
        }

        const payload: CreateEndpointPayload = {
            name,
            url,
            method,
            expectedStatus,
            expectedResponse,
            headers,
            body,
            timeout,
            frequency,
            enabled,
        };

        await createNewEndpoint(payload);
    };

    return (
        <div className="card max-w-4xl">

            <h2 className="page-title mb-2">
                Create New Endpoint
            </h2>

            <p className="mb-8 text-gray-500">
                Configure an API endpoint for continuous monitoring.
            </p>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="label">
                            Endpoint Name
                        </label>

                        <input
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="User Service"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            Method
                        </label>

                        <select
                            className="input"
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option>GET</option>
                            <option>POST</option>
                            <option>PUT</option>
                            <option>PATCH</option>
                            <option>DELETE</option>
                            <option>HEAD</option>
                            <option>OPTIONS</option>
                        </select>
                    </div>

                </div>

                <div>

                    <label className="label">
                        Endpoint URL
                    </label>

                    <input
                        className="input"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://api.example.com/users"
                        required
                    />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>

                        <label className="label">
                            Expected Status
                        </label>

                        <input
                            className="input"
                            type="number"
                            value={expectedStatus}
                            onChange={(e) =>
                                setExpectedStatus(Number(e.target.value))
                            }
                        />

                    </div>

                    <div>

                        <label className="label">
                            Timeout (ms)
                        </label>

                        <input
                            className="input"
                            type="number"
                            value={timeout}
                            onChange={(e) =>
                                setTimeout(Number(e.target.value))
                            }
                        />

                    </div>

                </div>

                <div>

                    <label className="label">
                        Expected Response
                    </label>

                    <textarea
                        className="textarea"
                        rows={4}
                        value={expectedResponse}
                        onChange={(e) =>
                            setExpectedResponse(e.target.value)
                        }
                    />

                </div>

                <div>

                    <label className="label">
                        Headers (JSON)
                    </label>

                    <textarea
                        className="textarea font-mono"
                        rows={5}
                        value={headersText}
                        onChange={(e) =>
                            setHeadersText(e.target.value)
                        }
                        placeholder={`{\n  "Content-Type": "application/json"\n}`}
                    />

                </div>

                <div>

                    <label className="label">
                        Body (JSON)
                    </label>

                    <textarea
                        className="textarea font-mono"
                        rows={6}
                        value={bodyText}
                        onChange={(e) =>
                            setBodyText(e.target.value)
                        }
                        placeholder={`{\n  "username": "john"\n}`}
                    />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>

                        <label className="label">
                            Frequency (seconds)
                        </label>

                        <input
                            className="input"
                            type="number"
                            value={frequency}
                            onChange={(e) =>
                                setFrequency(Number(e.target.value))
                            }
                        />

                    </div>

                    <div className="flex items-end">

                        <label className="flex items-center gap-3 font-medium">

                            <input
                                type="checkbox"
                                checked={enabled}
                                onChange={(e) =>
                                    setEnabled(e.target.checked)
                                }
                            />

                            Enable Monitoring

                        </label>

                    </div>

                </div>

                <div className="flex justify-end">

                    <button
                        type="submit"
                        className="btn-success"
                    >
                        Create Endpoint
                    </button>

                </div>

            </form>

        </div>
    );
};

export default EndpointForm;