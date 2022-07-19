export class LoggingService {
    constructor() { }

    logStatusChange(status: string) {
        console.log('New status' + status)
    }
}