import { open, appendFile, access, writeFile, constants } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const __filePath= fileURLToPath(import.meta.url);
const __dirName = dirname(__filePath);

const create = async () => {   
    try{
        await access(`${__dirName}/files/fresh.txt`,constants.F_OK, 1).then(()=>{
            console.error('FS operation failed');        
        })
    }catch{     
         
        await appendFile(`${__dirName}/files/fresh.txt`, 'I am fresh and young', {flag:'w'})    
    }
 }



await create();