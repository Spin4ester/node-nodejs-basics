import * as fs from 'fs';

const source = './src/fs/files'


const list = async () => {
    if (!fs.existsSync(source)){
        throw new Error('FS operation failed');
    } else {
        fs.readdir(source, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            console.log(files);
        });
    }
};

await list();