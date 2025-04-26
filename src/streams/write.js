import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createWriteStream } from "node:fs";
import { stdin } from "node:process";



const __dirname = dirname(fileURLToPath(import.meta.url));
const write = async () => {
    const ws = createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    ws.on('error', (error)=> console.error(error))
    stdin.on('data', (data)=> {
        ws.write(data)
    })    
};

await write();