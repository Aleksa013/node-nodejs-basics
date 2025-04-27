import { argv } from'node:process';

const parseArgs = () => {
   
    for(let i = 2; i < argv.length; i++){
       if(argv[i].startsWith('--')) console.log(`${argv[i]} is ${argv[i+1]}`)
    }
    
};

parseArgs();