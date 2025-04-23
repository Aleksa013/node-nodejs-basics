import {  appendFile, access,  constants } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const __filepath= fileURLToPath(import.meta.url);
const __dirname = dirname(__filepath);

const create = async () => {   
    try{
        await access(`${__dirname}/files/fresh.txt`,constants.F_OK, 1).then(()=>{
            console.error('FS operation failed');        
        })
    }catch{   
        await appendFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', {flag:'w'})    
    }
}



await create();