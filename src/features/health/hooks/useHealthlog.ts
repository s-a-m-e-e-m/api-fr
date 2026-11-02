import type { HealthLog } from "../types";
import { getHealthLogs } from "../api/health.api";
import { useState, useEffect } from "react";
import { socket } from "../../../services/socket";

export const useHealthLogs = (endpointId: string) => {
    const [healthLogs, setHealthLogs] = useState<HealthLog[]>([]);
    const [loading, setLoading] = useState(true);

    const refreshHealthLogs = async () => {
        try {
            setLoading(true);
            const logs = await getHealthLogs(endpointId);
            setHealthLogs(logs);
        } catch (error) {
            console.error('Error fetching health logs:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshHealthLogs();

        const handleHealthlogUpdate = (newlog: HealthLog) => {
            if(newlog.endpointId === endpointId) {
                setHealthLogs(prevLogs => [newlog, ...prevLogs]);
            }
        }

        socket.on("health-update", handleHealthlogUpdate);

        return () => {
            socket.off("health-update", handleHealthlogUpdate);
        };
        
    }, [endpointId]);

    return { healthLogs, loading, refreshHealthLogs };
}