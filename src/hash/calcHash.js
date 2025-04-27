import { createReadStream } from 'node:fs';
import { dirname } from 'node:path';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
const { createHash } = await import('node:crypto');

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    try{
        const rs = createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`)
        const hash = createHash('sha256');
        rs.on('data', (data) => {    
            console.log(hash.update(data).digest('hex'))
        })       
    }catch(error){
        console.log(error)
    }
};

await calculateHash();