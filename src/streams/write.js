import * as fs from 'fs';

const pathName = './src/streams/files/fileToWrite.txt';

const write = async () => {
    const file = fs.createWriteStream(pathName);
    const text = process.stdin.on('data', data => {
        file.write(data);
        process.exit();
    });
};

await write();