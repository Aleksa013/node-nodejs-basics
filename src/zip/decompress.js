import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'node:path';
import { pipeline } from 'node:stream/promises';

import { fileURLToPath } from 'node:url';
import { createUnzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    try{
        const unzlib = createUnzip();
        const rs = createReadStream(`${__dirname}/files/archive.gz`);
        const ws = createWriteStream(`${__dirname}/files/fileToCompress.txt`);
        
        await pipeline(rs, unzlib, ws)
    } catch(error){
        console.error(error)
    }
};

await decompress();