export interface Trip {
    id: number,
    userID: number,
    destinationID: number,
    travelers: number,
    date: string,
    duration: number,
    status: string,
    suggestedActivities: []
}