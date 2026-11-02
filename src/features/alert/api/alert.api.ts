import type { Alert } from "../types";
import api from "../../../services/api";

interface AlertsResponse {
    alerts: Alert[];
}

export const getAlerts = async (): Promise<Alert[]> => {
    const res = await api.get<AlertsResponse>("/alerts");
    return res.data.alerts;
}

export const getAlertsByEndpointId = async (endpointId: string): Promise<Alert[]> => {
    const res = await api.get<AlertsResponse>(`/alerts/endpoint/${endpointId}`);
    return res.data.alerts;
}