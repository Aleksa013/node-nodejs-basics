import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isMainThread, Worker} from 'node:worker_threads';
import { cpus } from 'node:os';



const __dirname = dirname(fileURLToPath(import.meta.url))


const getResultWorker = async(message) => {
    return new Promise((resolve, reject) => {
        const worker =  new Worker(`${__dirname}/worker.js`, { workerData: {message}});
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code)=> {
            if(code !== 0)
                throw new Error(code)
        }) 
    })        
}
const performCalculations = async () => {
    const resultArray = [];
    if(isMainThread) {
        for(let i = 0; i < cpus().length; i++){  
           const result = await getResultWorker(`${i+10}`)
           .then((data, error) => {
            if(data){
                return {
                    status:'resolved',
                    data
                }
            } 
            if(error) {
                return {
                    status:'error',
                    data: null
                }
            }
           })
           resultArray.push(result)
           if(i === cpus().length - 1) console.log(resultArray)
       }
    }
    
};

await performCalculations();