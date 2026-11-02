import type { Alert } from "../types";
import { useState, useEffect } from "react";
import { getAlerts } from "../api/alert.api";
import { socket } from "../../../services/socket";

export const useAlerts = () => {
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAlerts = async () => {
        try {
            setLoading(true);
            const data = await getAlerts();
            setAlerts(data);
        } catch (error) {
            console.error("Error fetching alerts:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAlerts();

        const handleNewAlert = (newAlert: Alert) => {
            setAlerts(prev => [newAlert, ...prev]);
        }

        socket.on("alert-sent", handleNewAlert);
        
        return () => {
            socket.off("alert-sent", handleNewAlert);
        }
    }, []);

    return { alerts, loading, fetchAlerts };
}