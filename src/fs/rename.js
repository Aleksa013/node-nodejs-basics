import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, rename as renameFile } from 'node:fs/promises';


const __filepath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filepath);

const rename = async () => {
     try{
        await access(`${__dirname}/files/wrongFilename.txt`);
        try{
            await access (`${__dirname}/files/properFilename.md`);
            throw new Error('FS operation failed')
        }catch(error){
            if(error.code==='ENOENT'){
                await renameFile(`${__dirname}/files/wrongFilename.txt`,`${__dirname}/files/properFilename.md`)
            } else {
                throw error
            }
        }      

    }catch(error){
        throw new Error('FS operation failed')
    }
};
rename();