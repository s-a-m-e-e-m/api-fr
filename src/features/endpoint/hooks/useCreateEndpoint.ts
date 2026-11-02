import type { CreateEndpointPayload } from '../types';
import { createEndpoint } from '../api/endpoint.api';

export const useCreateEndpoint = () => {
    const createNewEndpoint = async (payload: CreateEndpointPayload) => {
        try {
            const newEndpoint = await createEndpoint(
                payload
            );
            return newEndpoint;
        } catch (error) {
            console.error('Error creating endpoint:', error);
            throw error;
        }
    };

    return {
        createNewEndpoint,
    };
}