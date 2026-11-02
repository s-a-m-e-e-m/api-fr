import { useEffect, useState } from 'react';
import type { Endpoint } from '../types';
import { getEndpoints } from '../api/dashboard.api';

export const useDashboard = () => {
    const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
    const [loading, setLoading] = useState(true);

    const refreshDashboard = async () => {
        try {
            const data = await getEndpoints();
            setEndpoints(data);
        } catch(error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        refreshDashboard();
    }, []);

    return {
        endpoints,
        loading,
        refreshDashboard
    };
};