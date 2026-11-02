import api from "../../../services/api";
import type { HealthLog } from "../types";

export const getHealthLogs = async (endpointId: string): Promise<HealthLog[]> => {
    const res = await api.get<HealthLog[]>(`/healthlogs/${endpointId}`);
    return res.data;
}