import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'node:path';
import { pipeline } from 'node:stream/promises';

import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    try{
        const zlib = createGzip();
        const rs = createReadStream(`${__dirname}/files/fileToCompress.txt`);
        const ws = createWriteStream(`${__dirname}/files/archive.gz`);
        
        await pipeline(rs, zlib, ws)
    } catch(error){
        console.error(error)
    }
  
};

await compress();