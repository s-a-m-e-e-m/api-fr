import type { Incident } from "../types";
import api from "../../../services/api";

interface IncidentsResponse {
    incidents: Incident[];
}

interface IncidentResponse {
    incident: Incident;
}

export const getIncidents = async (): Promise<Incident[]> => {
    const res = await api.get<IncidentsResponse>("/incidents");
    return res.data.incidents;
}

export const getIncidentById = async (id: string): Promise<Incident> => {
    const res = await api.get<IncidentResponse>(`/incidents/${id}`);
    return res.data.incident;
}

export const getIncidentByEndpointId = async (endpointId: string): Promise<Incident> => {
    const res = await api.get<IncidentResponse>(`/incidents/endpoint/${endpointId}`);
    return res.data.incident;
}