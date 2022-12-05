import * as fs from 'fs';
import { Transform } from 'stream';

const transform = async () => {

    const reverseStream = () => { 
        return new Transform({transform(chunk, enc, cb) {
        cb(null, chunk.toString().split("").reverse().join(""));
    }})
}
    const reverse = reverseStream();
    process.stdin.pipe(reverse).pipe(process.stdout)  
};

await transform();
