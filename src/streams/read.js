import * as fs from 'fs';

const pathName = './src/streams/files/fileToRead.txt';

const read = async () => {
    fs.createReadStream(pathName).pipe(process.stdout)
};

await read();