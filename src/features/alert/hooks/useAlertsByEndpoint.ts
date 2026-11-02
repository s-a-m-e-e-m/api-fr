import type { Alert } from "../types";
import { getAlertsByEndpointId } from "../api/alert.api";
import { useEffect, useState } from "react";
import { socket } from "../../../services/socket";

export const useAlertsByEndpoint = (endpointId: string) => {
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAlertsByEndpoint = async () => {
        try {
            setLoading(true);
            const data = await getAlertsByEndpointId(endpointId);
            setAlerts(data);
        } catch (error) {
            console.error("Error fetching alerts by endpoint ID:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAlertsByEndpoint();

        const handleNewAlert = (newAlert: Alert) => {
            if(newAlert.endpointId === endpointId) {
                setAlerts(prev => [newAlert, ...prev]);
            }
        }

        socket.on("alert-sent", handleNewAlert);

        return () => {
            socket.off("alert-sent", handleNewAlert);
        }
    }, [endpointId]);

    return { alerts, loading, fetchAlertsByEndpoint };
}