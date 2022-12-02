import * as fs from 'fs';

const source = './src/fs/files'
const dir = './src/fs/files_copy'

const copy = async () => {
    if (fs.existsSync(dir) || !fs.existsSync(source)){
        throw new Error('FS operation failed');
    } else {
        fs.mkdirSync(dir);
        fs.cp(source, dir, { recursive: true }, (err) => {
            if (err) {
              console.error(err);
            }
          });
    }
};

copy();