import { fork } from 'node:child_process';
import { dirname } from 'node:path';
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from 'node:url';


const __dirname = dirname(fileURLToPath(import.meta.url));
const spawnChildProcess = async (args) => {
    try{
       const c_p = fork(`${__dirname}/files/script.js`, args);
       stdin.on('data', (data) => {
        c_p.send(`To script : ${data}`)
       })       
       c_p.on('message', (message) => stdout.write(`From script: ${message}`))
     
    }catch(error){
        console.error('Error my:'+error)
    }
 
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2'] );
