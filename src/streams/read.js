import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';
import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => { 
 const rs = createReadStream(`${__dirname}/files/fileToRead.txt`);
    rs.on('data', (data) => stdout.write(data));
    rs.on('error', (error) => console.error(error));
    rs.on('end', ()=> console.log('\n'))
};

await read()
