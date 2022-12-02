import * as fs from 'fs';

const source = './src/fs/files/wrongFilename.txt'
const newFile = './src/fs/files/properFilename.md'

const rename = async () => {
    if (!fs.existsSync(source)) {
        throw new Error('FS operation failed');
    } else {
        fs.rename(source, newFile, () => {
            console.log("\nFile Renamed!\n");
          });
    }
    
};

await rename();