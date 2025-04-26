import { readdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    try{
        const list = await readdir(`${__dirname}/files`);
        console.log(list);
    }catch{
        throw new Error('FS operation failed')
    }
   
};

await list();