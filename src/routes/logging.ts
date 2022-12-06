import { LogToConsole } from '../models/logToConsole';
import { LogToFile } from '../models/logToFile';
import { LoggingService } from '../services/logging';

module.exports = (app) => {
    app.post('/file-logging', (req, res) => {
        const message = req.body.message;
        const loggingService = new LoggingService(new LogToFile());
        loggingService.logMessage(message);

        return res.sendStatus(200);
    });

    app.post('/console-logging', (req, res) => {
        const message = req.body.message;
        const loggingService = new LoggingService(new LogToConsole());
        loggingService.logMessage(message);

        return res.sendStatus(200);
    });
}