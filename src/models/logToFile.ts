import fs from 'fs';
import path from 'path';

export class LogToFile {
    filePath = path.join('./src', 'data.txt');

    logMessage(message: string) {
        fs.appendFile(this.filePath, message + '\n', (err) => {
            if (err) return console.log(err);
            console.log('Appended!');
         });
    }
}