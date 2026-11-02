export interface Endpoint {
    _id: string,
    name: string,
    url: string,
    method: string,
    expectedStatus: number,
    expectedResponse: string | null,
    headers: Record<string, string>,
    body: Record<string, unknown> | null,
    timeout: number,
    frequency: number,
    enabled: boolean,
    createdAt: string,
    updatedAt: string,
    lastCheckedAt: string,
    lastStatusCode: number,
    latestLatency: number,
    latestStatus: string
}

export interface CreateEndpointPayload {
    name: string;
    url: string;
    method: string;
    expectedStatus: number;
    expectedResponse: string | null;
    headers: Record<string, string>;
    body: Record<string, unknown> | null;
    timeout: number;
    frequency: number;
    enabled: boolean;
}

export interface UpdateEndpointPayload
    extends CreateEndpointPayload {}