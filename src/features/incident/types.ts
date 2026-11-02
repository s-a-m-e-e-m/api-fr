export interface Incident {
    _id: string;
    endpointId: string;
    startTime: string;  
    endTime: string; 
    status: string;  
    reason: string; 
    acknowledged: string; 
    aiAnalysis: {
        summary: string;
        probableRootCause: string;
        recommendedAction: string[];
        severityLevel: 'low' | 'medium' | 'high';
        generatedAt: string;
    }
}