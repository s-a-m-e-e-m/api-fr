import api from "../../../services/api";
import type { Endpoint } from "../types";

interface EndpointResponse {
    endpoints: Endpoint[];
}

export const getEndpoints = async (): Promise<Endpoint[]> => {
    const res = await api.get<EndpointResponse>("/endpoints");
    return res.data.endpoints;
};