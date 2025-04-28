import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isMainThread, Worker} from 'node:worker_threads';
import { cpus } from 'node:os';


const __dirname = dirname(fileURLToPath(import.meta.url))
// this code is for simulating  random behavior
const simulateRandomBehavior = (number) => Math.random() > 0.5 ? number : 'haha!'

const getResultWorker = async(message) => {
    return new Promise((resolve, reject) => {
        const worker =  new Worker(`${__dirname}/worker.js`, { workerData: {message}});
        worker.on('message', resolve)
        worker.on('error', reject)
      
    })         
}
const performCalculations = async () => {
    const resultArray = [];
    if(isMainThread) {
        for(let i = 0; i < cpus().length; i++){  
           const result = await getResultWorker(simulateRandomBehavior(`${i+10}`))
           .catch(() =>  {
                return null
            })
           .then((data) => {
            if(data){
                return {
                    status:'resolved',
                    data
                }
            } else {
                return {
                    status:'error',
                    data: null
                }
            }
            
           })
           resultArray.push(result)

       }
       Promise.all(resultArray).then((array) => console.log(array))
    }
    
};

await performCalculations();