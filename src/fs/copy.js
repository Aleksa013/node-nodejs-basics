import { cp, opendir, access } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filepath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filepath);

const copy = async () => {
   try{
    await access(`${__dirname}/files`, 7)
    try{
        await opendir(`${__dirname}/files_copy`)
        console.error('FS operation failed '); 
    }catch(error){
        if(error.code === 'ENOENT'){
          await cp(`${__dirname}/files`, `${__dirname}/files_copy`, {recursive:true})
        } else {
            console.error('FS operation failed'); 
        }         
    }  
   }catch{
    console.error('FS operation failed'); 
   }   
};

await copy();
