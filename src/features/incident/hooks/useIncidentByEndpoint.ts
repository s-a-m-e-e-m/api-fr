import type { Incident } from "../types";
import { getIncidentByEndpointId } from "../api/incident.api";
import { useEffect, useState } from "react";

export const useIncidentByEndpoint = (endpointId: string) => {
    const [incidents, setIncidents] = useState<Incident[] | []>([]);
    const [loading, setLoading] = useState(true);

    const fetchIncidentByEndpointId = async () => {
        try {
            setLoading(true);
            const incident = await getIncidentByEndpointId(endpointId);
            setIncidents(incidents);
            return incident;
        } catch (error) {
            console.error("Error fetching incident by endpoint ID:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIncidentByEndpointId();
    }, [endpointId]);

    return { incidents, loading, fetchIncidentByEndpointId };
}