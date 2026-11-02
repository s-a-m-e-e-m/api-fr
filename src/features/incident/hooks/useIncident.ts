import type { Incident } from "../types";
import { getIncidentById } from "../api/incident.api";
import { useEffect, useState } from "react";

export const useIncidentById = (id: string) => {
    const [incident, setIncident] = useState<Incident | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchIncidentById = async () => {
        try {
            setLoading(true);
            const incident = await getIncidentById(id);
            setIncident(incident);
            return incident;
        } catch (error) {
            console.error("Error fetching incident by ID:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchIncidentById();

    }, [id]);

    return { incident, loading, fetchIncidentById };
}