import { createHash } from "crypto";
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  fs.readFile(`${__dirname}/files/fileToCalculateHashFor.txt`, (err, data) => {
    if (err) throw new Error(err);
    const hashHex = createHash("sha3-256").update(data).digest("hex");
    console.log(hashHex);
  });
};

await calculateHash();