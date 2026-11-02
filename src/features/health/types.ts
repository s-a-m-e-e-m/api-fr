export interface HealthLog {
    _id: string;
    endpointId: string;
    status: string;
    statusCode: number;
    latency: number;
    responseBody: string;
    checkedAt: string;
}