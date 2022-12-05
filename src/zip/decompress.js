import * as zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = '/files'
const dest = path.join(__dirname, files, '/fileToCompress.txt') 
const source = path.join(__dirname, files, '/archive.gz') 

const decompress = async () => {

    const unzip = zlib.createUnzip();  
    const read = fs.createReadStream(dest);
    const write = fs.createWriteStream(source);

    fs.access(dest, error => {
        if (!error) {
            throw new Error('File already exists')
        } else {
            read.pipe(unzip).pipe(write);
        }
    });

    	
};

await decompress();