export interface Alert {
    _id: string;
    endpointId: string;
    type: string;
    message: string; 
    sent: string;     
    sentAt: Date;
}