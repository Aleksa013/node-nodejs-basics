
import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filepath =fileURLToPath(import.meta.url);
const __dirname = dirname(__filepath);

const read = async () => {
   try{
    const content = await readFile(`${__dirname}/files/fileToRead.txt`, {encoding: 'utf8'});
    console.log(content);
    }catch{
    throw new Error('FS operation failed');
   }
};

await read();