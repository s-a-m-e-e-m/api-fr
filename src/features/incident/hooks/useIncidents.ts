import type { Incident } from "../types";
import { getIncidents } from "../api/incident.api";
import { useEffect, useState } from "react";

export const useIncidents = () => {
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchIncidents = async () => {
        try {
            setLoading(true);
            const incidents = await getIncidents();
            setIncidents(incidents);
        } catch (error) {
            console.error("Error fetching incidents:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIncidents();
    }, []);

    return { incidents, loading, fetchIncidents };
}