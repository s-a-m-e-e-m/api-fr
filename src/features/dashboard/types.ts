export interface Endpoint {
    _id: string;
    name: string;
    lastStatusCode: number;
    latestLatency: number;
    latestStatus: string;
}