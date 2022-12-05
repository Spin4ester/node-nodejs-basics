import * as fs from 'fs';

const source = './src/fs/files'
const dir = './src/fs/files_copy'

const copy = async () => {

    if (fs.access(source, (error) => {
        if (error) {
           throw new Error('FS operation failed')
        } 
        else if (fs.access(dir, (error) => {
            if (!error) {
              throw new Error('FS operation failed')
            } else {
                fs.mkdir(dir, (err) => {
                    if (err) {
                        return console.error(err);
                    }})
                fs.cp(source, dir, { recursive: true }, (err) => {
                    if (err) {
                      console.error(err);
                    }
            });}
            
        })) 
            console.log('Created')
        }));
    };

copy();           
            