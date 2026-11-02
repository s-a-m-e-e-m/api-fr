import api from "../../../services/api";
import type { Endpoint, CreateEndpointPayload } from "../types";

interface EndpointResponse {
    endpoint: Endpoint;
}

export const getEndpointById = async (id: string): Promise<Endpoint> => {
    const res = await api.get<EndpointResponse>(`/endpoints/${id}`);
    return res.data.endpoint;
}

export const createEndpoint = async (
    payload: CreateEndpointPayload
): Promise<Endpoint> => {
    const res = await api.post<EndpointResponse>(
        '/endpoints', 
        payload
    );
    return res.data.endpoint;
}