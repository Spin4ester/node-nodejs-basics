import * as fs from 'fs';

const filePath = './fs/files/fresh.txt'

const create = async () => {
    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFileSync('./fs/files/fresh.txt', 'I am fresh and young')
    }
};

await create();