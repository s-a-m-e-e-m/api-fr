import type { Endpoint } from '../types';
import { useEffect, useState } from 'react';
import { getEndpointById } from '../api/endpoint.api';

export const useEndpoint = (id: string) => {
    const [endpoint, setEndpoint] = useState<Endpoint | null>(null);
    const [loading, setLoading] = useState(true);

    const endpointDetails = async () => {
        try {
            const res = await getEndpointById(id);
            setEndpoint(res);
        } catch (error) {
            console.error('Error fetching endpoint details:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        endpointDetails();
    }, [id])

    return {
        endpoint,
        loading,
        endpointDetails
    }
}