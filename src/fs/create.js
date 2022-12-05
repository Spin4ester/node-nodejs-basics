import * as fs from 'fs';

const filePath = './src/fs/files/fresh.txt'

const create = async () => {
    fs.access(filePath, error => {
        if (!error) {
            throw new Error('FS operation failed')
        } else {
            fs.writeFile(filePath, 'I am fresh and young', (err) => {

            })
        }
    });
};

await create();