import path from 'path';
import { readCSV } from '../utils/csvReader';
import { readExcel } from './excelReader';
import fs, { readFileSync } from 'fs';

export function readData(filePath: string, sheetName?: string) {

    const ext = path.extname(filePath).toLocaleLowerCase();

    switch (ext) {
        case ".csv":
            console.log(".. I am Reading CSV ...");
            return readCSV(filePath);

        case ".xlsx":
            console.log(".. I am Reading Excel ...");
            return readExcel(filePath, sheetName || 'Sheet1');

        case ".json":
            console.log(".. I am Reading JSON ...");
            const JSONData = fs.readFileSync(filePath, 'utf8').toString();
            return JSON.parse(JSONData)

        default:
            throw new Error(`Unsupported file type - ${ext}`);
    }
}