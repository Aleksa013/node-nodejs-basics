import { rm, access } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
   try{
    await access(`${__dirname}/files/fileToRemove.txt`);
    await rm(`${__dirname}/files/fileToRemove.txt`)
   }catch(error){
    throw new Error('FS operation failed')
   }
};

await remove();