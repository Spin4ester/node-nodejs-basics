import * as zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = '/files'
const source = path.join(__dirname, files, '/fileToCompress.txt') 
const dest = path.join(__dirname, files, '/archive.gz') 

const compress = async () => {
    const zip = zlib.createGzip();
    const read = fs.createReadStream(source);
    const write = fs.createWriteStream(dest);

    fs.access(dest, error => {
        if (!error) {
            throw new Error('File already exists')
        } else {
            read.pipe(zip).pipe(write);
        }
    });
};

await compress();