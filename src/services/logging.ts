export class LoggingService {
    private model;

    constructor(model) {
        this.model = model;
    }

    logMessage(message: string): void {
        this.model.logMessage(message);
    }
}