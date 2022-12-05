import * as fs from 'fs';

const source = './src/fs/files/fileToRead.txt'

const read = async () => {

    fs.access(source, error => {
        if (error) {
            throw new Error('FS operation failed')
        } else {
            fs.readFile(source, 'utf8' , (err, data) => {
                if (err) {
                  console.error(err)
                  return
                }
                console.log(data)
              })
        }
    });
};

await read();