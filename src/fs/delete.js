import * as fs from 'fs';

const source = './src/fs/files/fileToRemove.txt'

const remove = async () => {

    fs.access(source, error => {
        if (error) {
            throw new Error('FS operation failed')
        } else {
            fs.unlink(source, () => {
                console.log("\nFile Removed!\n");
              });
        }
    });
};

await remove();